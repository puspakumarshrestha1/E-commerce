import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Email1() {
  return (
    <>
    <Container className='email1'>
    <Row>
        <Col lg={6}>
          <div className='overflow position-relative'>
            <img className='w-100' src='https://new.axilthemes.com/demo/template/etrade/assets/images/product/poster/poster-01.png' alt=''/>
            <h5 className='position-absolute text-light'>Rich Sound,<br/>
          for less.</h5>
          </div>
          
          
        </Col>
        <Col lg={6}>
          <div className='overflow position-relative'>
            <img className='w-100' src='https://new.axilthemes.com/demo/template/etrade/assets/images/product/poster/poster-02.png' alt=''/>
            <h5 className='position-absolute text-light text2'>Get VR,<br/>
          Reality Glass.</h5>
          </div>
        </Col>
      </Row>
    </Container>
      
    </>
  )
}

export default Email1
