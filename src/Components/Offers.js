import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

function Offers() {
  return (
    <div >
    <Container  className='offers py-5 my-5'>
        <Row>
            <Col>
            <h2 className='py-3'>Exciting Offers</h2>
            </Col>
        </Row>
        <Row>
            <Col  lg={6} className='feat1'>
                <div className='py-5 my-5 ms-5'>
                <h3>Stylish Coat</h3>
                <h4>$150</h4>
                <p id="demo"></p>
                <Button className='bg-warning border-0'>
                    Shop Now
                </Button>
                </div>
               
            </Col>
            <Col lg={6} className='feat2 text-center'>
            <div className='py-5 my-5 ms-5'>
                <h1>New Year Sale</h1>
                <h4>$Up To 70% Off</h4>
                <p id="demo"></p>
                <Button className='bg-warning border-0'>
                    Shop Now
                </Button>
                </div>

            </Col>
        </Row>
    </Container>
      
    </div>
  )
}

export default Offers
