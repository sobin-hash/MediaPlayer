import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className=''>
      <div className='bg-light' style={{ width: '100%', height: '100%' }}>
        <Row className='p-5' >
          <Col md='4' className='d-flex justify-content-center' >

            <div className='d-flex flex-column'>
              <h4><i class="fa-solid fa-headphones">YX Music</i></h4>
              <p style={{ textAlign: 'justify' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
          </Col>
          <Col md='4' sm='6' className='d-flex justify-content-center'>

            <div className='d-flex flex-column'> <h4 >Links</h4>
              <Link to={'/'} style={{ textDecoration: 'none' }}>Landing Page</Link>
              <Link to={'/home'} style={{ textDecoration: 'none' }}>Home</Link>
              <Link to={'/watch-history'} style={{ textDecoration: 'none' }}>Watch History</Link>
            </div>
          </Col>
          <Col md='4' sm='6' className='d-flex justify-content-center'>

            <div className='d-flex flex-column'>
              <h4 >Guides</h4>
              <Link to={'https://react.dev/'} style={{ textDecoration: 'none' }}>React</Link>
              <Link to={'https://fontawesome.com/'} style={{ textDecoration: 'none' }}>Fontawesome</Link>
              <Link to={'https://react-bootstrap.github.io/'} style={{ textDecoration: 'none' }}>React-Bootstrap</Link>
            </div>
          </Col>

        </Row>
        <p className='text-center mt-2 text-black' style={{fontWeight:'bold'}}>Copyright @ 2023 Y Music .Built with React</p>
      </div>

    </div>
  )
}



export default Footer