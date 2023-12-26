import React, { useState } from 'react'
import { Modal, Button,Form,FloatingLabel } from 'react-bootstrap';
import { addVideos } from '../services/allApi';
import { toast } from 'react-toastify';



function Add({changeResState}) {

  const [show, setShow] = useState(false);
  const [video,setVideo] = useState({
    id:'',caption:'',thumbnail:'',url:''

  })

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleVideoDetails = (e=>{
    const {name,value}=e.target
    setVideo({...video,[name]:value})
  })

  const handleVideoUrl=(e)=>{
    const {name,value}=e.target
    if(value.includes("v=")){
      let index = value.indexOf("v=")
      let url = value.substring(index+2,index+13)
      let videoUrl = `https://www.youtube.com/embed/${url}`
      setVideo({...video,[name]:videoUrl})
    }
  }

  const uploadVideo =async ()=>{
    const {id,caption,thumbnail,url}=video
    if(!id||!caption||!thumbnail||!url){
      toast.warning("Please enter valid video details")

    }else{
      let response = await addVideos(video)
      console.log(response)
      console.log("yhhh",response.status)
      if(response.status>=200 || response.status<300){
        
        toast.success("Video succesfully uploaded")
        setShow(false)
        changeResState()
        
        
      }else{
        toast.error("Upload Failed...")
        
      }


    }
  }
  console.log(video)
  return (
    <>

      <div className='btn' onClick={handleShow}>
      

        <i class="fa-solid fa-circle-plus"></i>

      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload Video Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel
            controlId="id"
            label="Video id"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="Video Id" name='id' onChange={(e)=>handleVideoDetails(e)}/>
          </FloatingLabel>
          <FloatingLabel className="mb-3" controlId="floatingCaption" label="Caption">
            <Form.Control type="text" placeholder="PassVideo Caption" name='caption' onChange={(e)=>handleVideoDetails(e)}/>
          </FloatingLabel>
          <FloatingLabel className="mb-3" controlId="floatingImageUrl" label="Video image Url">
            <Form.Control type="text" placeholder="Video image url" name='thumbnail' onChange={(e)=>handleVideoDetails(e)} />
          </FloatingLabel>
          <FloatingLabel  className="mb-3" controlId="floatingVideoUrl" label="Video Url">
            <Form.Control type="text" placeholder="Video Url" name='url' onChange={(e)=>handleVideoUrl(e)} />
          </FloatingLabel>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={uploadVideo}>Upload</Button>
        </Modal.Footer>
      </Modal>
      
      

    </>
  )
}

export default Add