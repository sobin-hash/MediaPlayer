import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';


function Landing() {
  const navigateByUrl = useNavigate()
  const clickNavigate = () => {
    navigateByUrl('/home')
  }
  return (
    <div style={{ backgroundColor: '#A7BEAE' }}>

      <div  >


        <Row className='align-items-center'>
          <Col></Col>
          <Col md='4'  >
            <div >
              <h2 >Welcome to <span className='text-danger'> Y MUSIC.COM</span></h2>
              <p style={{ textAlign: 'justify' }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat eaque dolor nobis maiores, suscipit cumque rerum! Ut magnam cum nemo odit, blanditiis esse repudiandae pariatur, officia nisi temporibus expedita iste!</p>
              <button className='btn btn-dark' onClick={clickNavigate}>Get Started</button>
            </div>

          </Col>
          <Col></Col>
          <Col md='6' className='my-5'>
            <img className='img-fluid shadow' src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/1d790275563155.5c505b88a31d6.jpg" alt="" />
          </Col>
        </Row>

      </div>
      <div className='m-5'>
        
      <div className='card-section mt-5  shadow rounded m-5' >
        <h2 className='text-center mb-5 pt-3'>Features</h2>
        <div className='d-flex' style={{ justifyContent: 'space-around', flexWrap: 'wrap' }}>
          <Card style={{ width: '18rem' }} className='mb-5'>
            <Card.Img variant="top" src="https://www.bing.com/th/id/OGC.2c5eb7653a358c6dc9214750233c0877?pid=1.7&rurl=https%3a%2f%2fmedia0.giphy.com%2fmedia%2f56idhIkz9X9Ly%2fgiphy.gif&ehk=rEokqRWinq3XscSAo40h3C%2beVmBKMQr%2bl%2b14vIxiJyo%3d" />

            <Card.Body>
              <Card.Title className='text-center'>Managing Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }} className='mb-5'>
            <Card.Img variant="top" src="https://i.pinimg.com/originals/21/80/1f/21801f4aaed85514b1d0f0c1f8fea275.gif" />

            <Card.Body>
              <Card.Title className='text-center'>Upload Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }} className='mb-5'>
            <Card.Img style={{ height: '216px' }} variant="top" src="https://www.bing.com/th/id/OGC.d54fb6e8a464a61d0d410f4a257d8c2b?pid=1.7&rurl=https%3a%2f%2fmedia1.tenor.com%2fimages%2fd54fb6e8a464a61d0d410f4a257d8c2b%2ftenor.gif%3fitemid%3d16518011&ehk=awZCY8p0D2qj5q7fd96ZAS1YrpxTf54JK1eEbbdxzJA%3d" />
            <Card.Body>
              <Card.Title className='text-center'>Watch History</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>



      </div>
      </div>
      <div className='p-5'>
        <div className='border-success p-5 rounded shadow mx-5'>


          <div>
            <Row >
              <Col md='6' >
                <h1>
                  Simple and Powerful
                </h1>
                <p style={{ textAlign: 'justify' }}>Lorem From its medieval origins to the digital era, learn everything there is to know about the ubiquitous lorem ipsum passage.
                Lorem From its medieval origins to the digital era, learn everything there is to know about the ubiquitous lorem ipsum passage.Lorem From its medieval origins to the digital era, learn everything there is to know about the ubiquitous lorem ipsum passage.</p>
              </Col>
              <Col md='6'>
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/jxoH_QZnmAI?si=ptxhkLMPk2MegKhD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </Col>
            </Row >
          </div>



        </div>

      </div>
    </div>

  )
}

export default Landing