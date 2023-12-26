import React,{useState} from 'react'
import { Card,Modal } from 'react-bootstrap'
import { deleteVideo } from '../services/allApi';
import { toast } from 'react-toastify';
import { addHistory } from '../services/allApi';
import { v4 as uuidv4 } from 'uuid';

function Videocard({video,delResUpdate,isCategory}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  //to show modal to show video
  const handleShow =async () =>{
     setShow(true);

     const {caption,url}=video
     let date = new Date()
     
     let id = uuidv4()
     console.log("console",id,caption,url,date)
     let body = {id,caption,url,date}
     const res = await addHistory(body)
     console.log("hisres",res)
     


    }

  const removeVideo=async(id)=>{
    let res = await deleteVideo(id)
    console.log(res)
    if(res.status>=200 && res.status<300){
      toast.success("Video deleted successfully!!")
      delResUpdate()
    }else{
      toast.error("Deletion Failed..!!")
    }




  }

  const onDrag=(e,id)=>{
    // e.preventDefault()
    console.log("idididd",id)
    e.dataTransfer.setData("videoid",id)

  }

  return (
    <div>

      <Card style={{ width: '100%' }}>
        <Card.Img style={{height:'30vh'}} onClick={handleShow} draggable onDragStart={(e)=>onDrag(e,video?.id)} variant="top" src={video?.thumbnail} />
        <Card.Body>
          {
            isCategory?"":<Card.Title>{video?.caption} <span className='btn' style={{float:'right'}} onClick={()=>removeVideo(video.id)}><i class="fa-solid fa-trash fa-xl" style={{color: '#0c0c0d'}}></i></span></Card.Title>
          }
          
          
        </Card.Body>
      </Card>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{video?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="400" src={`${video?.url}?autoplay=1`} title="Akon keep up" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Modal.Body>
        <Modal.Footer>
         
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Videocard