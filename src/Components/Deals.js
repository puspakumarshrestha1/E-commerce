import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

function Deals() {
    return (
        <>
            <Container className='deals py-5 my-5'>
                <Row>
                    <Col className='text-center py-4'>
                        <h2>Deals Of The Day</h2>
                    </Col>
                </Row>
                <Row>
                    <Col  lg={6} className='deal1'>
                        <Row>
                            <Col className=' deal1-text text-end py-5 my-5 me-3'>
                                <h2>Stylish Pink Court</h2>
                                <h5>$190</h5>
                                <p><i class="bi bi-star-fill text-warning"></i> <i class="bi bi-star-fill text-warning"></i> <i class="bi bi-star-fill text-warning"></i> <i class="bi bi-star-fill text-warning"></i> <i class="bi bi-star-fill text-warning"></i> 150</p>
                                <p id='demo2'></p>
                                <Button>Shop Now</Button>
                            </Col>
                        </Row>

                    </Col>
                    <Col lg={6} >
                        <Row>
                            <Col className='position-relative'>
                                <img className='w-100' src='https://angular.pixelstrap.com/multikart/assets/images/collection/fashion/2.jpg' alt='' />
                          
                            </Col>
                            
                        </Row>
                        <Row className='mt-5'>
                            <Col>
                                <img className='w-100' src='https://angular.pixelstrap.com/multikart/assets/images/collection/fashion/1.jpg' alt='' />
                            </Col>
                        </Row>

                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default Deals
