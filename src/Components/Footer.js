import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Footer() {
  return (
    <div className='footer bg-dark mt-5 py-5'>
      <Container className=''>
        <Row>
          <Col xs={6} sm={6} md={6} lg={3}>
            <img className='py-3' src='https://wpocean.com/html/tf/themart/assets/images/logo-2.svg' alt='' />
            <p className='text-light py-4'>Elit commodo nec urna erat morbi at hac turpis aliquam. In tristique elit nibh turpis. Lacus volutpat ipsum convallis tellus pellentesque etiam.</p>
            <h6><a href='https://www.facebook.com/'><i class="bi bi-facebook text-light fs-5 pe-2"></i></a> <a href='https://github.com/'><i class="bi bi-github text-light fs-5 pe-2"></i></a>  <a href='https://www.instagram.com/'><i class="bi bi-instagram text-light fs-5 pe-2"></i></a> <a href='https://www.linkedin.com/'><i class="bi bi-linkedin text-light fs-5 pe-2"></i></a> <a href='https://web.telegram.org/'><i class="bi bi-telegram text-light fs-5 pe-2"></i></a>  </h6>
          </Col>
          <Col xs={6} sm={6} md={6} lg={3} className='px-5' >
            <h2 className='text-light py-3'> Contact Us</h2>
            <h6 className='text-light py-2'><i class="bi bi-envelope"></i> themart@gmail.com</h6>
            <h6 className='text-light py-2'><i class="bi bi-telephone-inbound"></i> (208) 555-0112<br/>
              (704) 555-0127</h6>
              <h6 className='text-light py-2'> <i class="bi bi-geo-alt"></i>4517 Washington Ave.<br/> Manchter, Kentucky 495</h6>

          </Col>
          <Col xs={6} sm={6} md={6} lg={3} className='px-5' >
          <h2 className='text-light py-3'>Popular</h2>
          <h6 className='text-light py-1'>Mens</h6>
          <h6 className='text-light py-1'>Womens</h6>
          <h6 className='text-light py-1'>Kids</h6>
          <h6 className='text-light py-1'>Shoe</h6>
          <h6 className='text-light py-1'>Jewelry</h6>
          </Col>

          <Col xs={6} sm={6} md={6} lg={3} className='px-5' >
          <h2 className='text-light py-3'>Instagram</h2>
          <Row>
            <Col lg={4}>
              <img className='w-100' src='https://wpocean.com/html/tf/themart/assets/images/instragram/1.jpg' alt=''/>
            </Col>
            <Col lg={4}>
              <img className='w-100' src='https://wpocean.com/html/tf/themart/assets/images/instragram/2.jpg' alt=''/>
            </Col>
            <Col lg={4}>
            <img className='w-100' src='https://wpocean.com/html/tf/themart/assets/images/instragram/4.jpg' alt=''/>
            </Col>
          </Row>
          <Row className='py-3'>
            <Col lg={4}>
              <img className='w-100' src='https://wpocean.com/html/tf/themart/assets/images/instragram/2.jpg' alt=''/>
            </Col>
            <Col lg={4}>
              <img className='w-100' src='https://wpocean.com/html/tf/themart/assets/images/instragram/4.jpg' alt=''/>
            </Col>
            <Col lg={4}>
            <img className='w-100' src='https://wpocean.com/html/tf/themart/assets/images/instragram/3.jpg' alt=''/>
            </Col>
          </Row>

          </Col>
        </Row>
      </Container>

    </div>
  )
}

export default Footer
