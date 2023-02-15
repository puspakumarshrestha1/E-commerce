import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

function Iphone() {
    return (
        <>
            <Container className='my-5 iphone'>
                <Row>
                    <Col className='text-center position-relative'>
                        <img className='w-100' src='https://hamart-shop.vercel.app/_next/static/media/banner-1.a1774ed4.jpg' alt='' />
                        <div className='position-absolute iphone-text text-start'>
                            <h5>Apple iPhone 12 Pro</h5>
                            <h2>The wait is on: iphone<br/> 12 max pro</h2>
                            <h5>Last call for up to 32% off!</h5>
                            <Button className='border-0 my-3 btn-ph'>Visit Now</Button>
                                
                                
                        </div>
                       

                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default Iphone
