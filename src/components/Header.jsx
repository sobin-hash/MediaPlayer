import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <div>

      <Navbar className='' style={{ backgroundColor: 'black' }}>
        <Container>
          <Link to={'/'} style={{textDecoration:'none'}}>
            <Navbar.Brand href="#home" className='text-black'  >
            <i class="fa-brands fa-spotify fa-2xl" style={{color: '#1fc176'}}></i>{' '}
             <span style={{fontWeight:'bolder',color:'#A7BEAE',fontFamily: 'Play'}}> YX Music</span>
            </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>


    </div>
  )
}

export default Header