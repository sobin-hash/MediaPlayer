import React, { useState } from 'react'
import { Row,Col} from 'react-bootstrap'
import Add from '../components/Add'
import Category1 from '../components/Category1'
import View from '../components/View'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'

function Home() {
const [resState,setResState]=useState(false)
const changeResState=()=>{
  setResState(true)
}


  return (
    <div>
      <h2>All videos
        <Link style={{float:'right',textDecoration:'none'}} to={'/watch-history'}>Watch history</Link>
      </h2>
      <Row className='mx-4 mt-5 mb-5 p-5'>
        <Col md='2'>
          <Add  changeResState={changeResState}/>


        </Col>
        <Col md='7'>
        
        <View resState={resState}/>

        </Col>
        <Col md='3'>
        <Category1/>
        

        </Col>
      </Row>
      <ToastContainer/>
    </div>
  )
}

export default Home