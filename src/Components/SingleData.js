import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Trending from './Trending';

function SingleData() {
    const [products, setProducts] = useState([])
    let { cid } = useParams()
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${cid}`)
            .then(res => {
                console.log(res.data);
                setProducts(res.data)
            });
    }, [])
    return (
        <Container className='py-5 single'>
            <Row>
                <Col lg={6} className='py-5 text-center'>
                    <img className='' src={products.image} alt='' />
                </Col>
                <Col lg={6}>
                    <h1>{products.title}</h1>
                    <p><i class="bi bi-star-fill text-warning"></i> <i class="bi bi-star-fill text-warning"></i> <i class="bi bi-star-fill text-warning"></i> <i class="bi bi-star-fill text-warning"></i> <i class="bi bi-star-fill text-warning"></i> </p>
                    <p className='text-uppercase'>{products.category}</p>
                    <h5>{products.price}$</h5>
                   <p>{products.description}</p>

                </Col>




            </Row>
            <Row>
                <Col>
                <Trending/>
                </Col>
            </Row>

        </Container>
    )
}

export default SingleData
