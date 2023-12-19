import React from 'react'

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>

<Navbar className="bg-info-subtle">
        <Container>
          <Navbar.Brand href="/" className='fw-bold fs-2 text-info'>
            <img
              alt=""
              src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/69aa1b11634183.560fb06306102.gif"
              width="60"
              height="40"
              className="d-inline-block align-top rounded" style={{marginLeft:"-100px"}}
            />{' '}
            Counter App
          </Navbar.Brand>
        </Container>
      </Navbar>


    </div>
  )
}

export default Header