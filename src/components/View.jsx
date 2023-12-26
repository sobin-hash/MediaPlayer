import React, { useEffect, useState } from 'react'
import Videocard from '../components/Videocard'
import { getVideos,getCategory} from '../services/allApi'
import { Row, Col } from 'react-bootstrap'


function View({resState}) {
  const [allVideos, setAllVideos] = useState([])
  const [allCategory1,setallCategory1]=useState([])
  const [delResponse,setDelResponse]=useState(false)
  const delResUpdate=()=>{
    setDelResponse(true)
    
}

  const getVideo = async () => {
    let res = await getVideos()
    setAllVideos(res.data)
    setDelResponse(false)
    
    console.log(res.data)
  }

  const getCategorys = async () => {
    let res = await getCategory()
    setallCategory1(res.data)
    // setDelResponse(false)
    
    console.log(res.data)
    console.log("jjjjjjjjjjjjjjjjjjjj",allCategory1)
  }

  useEffect(() => {
    getVideo()
    getCategorys()
  }, [resState,delResponse])
  return (
    <div className='p-3 border border-primary shadow rounded'>
      <Row>

        {
          allVideos.map(item=>(
            <Col sm={12} md={6} lg={4} className='mb-4'>
              <Videocard delResUpdate={delResUpdate} className='' video={item}/>
            </Col>
          ))
        }
        
      </Row>

    </div>
  )
}

export default View