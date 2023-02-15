import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Feature() {
    return (
        <>
            <Container className='feature py-2'>
                <Row>
                    <Col className='py-5'>
                        <h2>Feature Category</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div class="owl-carousel">
                            <div>
                                <img src='https://wpocean.com/html/tf/themart/assets/images/featured-categorie/1.png' alt=''/>
                                <p className='text-center'>Shoes</p>
                            </div>
                            <div>
                                <img src='https://wpocean.com/html/tf/themart/assets/images/featured-categorie/2.png' alt=''/>
                                <p className='text-center'>Cosmetics</p>
                            </div>
                            <div>
                                <img src='https://wpocean.com/html/tf/themart/assets/images/featured-categorie/3.png' alt=''/>
                                <p className='text-center'>Bags</p>
                            </div>
                            <div>
                                <img src='https://wpocean.com/html/tf/themart/assets/images/featured-categorie/4.png' alt=''/>
                                <p className='text-center'>Womens</p>
                            </div>
                            <div>
                                <img src='https://wpocean.com/html/tf/themart/assets/images/featured-categorie/5.png' alt=''/>
                                <p className='text-center'>Perfumes</p>
                            </div>
                            <div>
                                <img src='https://wpocean.com/html/tf/themart/assets/images/featured-categorie/6.png' alt=''/>
                                <p className='text-center'>Womens</p>
                            </div>
                            <div>
                                <img src='https://wpocean.com/html/tf/themart/assets/images/featured-categorie/7.png' alt=''/>
                                <p className='text-center'>Ladies</p>
                            </div>
                            <div>
                                <img src='https://wpocean.com/html/tf/themart/assets/images/featured-categorie/8.png' alt=''/>
                                <p className='text-center'>Kids Shoes</p>
                            </div>
                        </div></Col>
                </Row>
            </Container>

        </>
    )
}

export default Feature
