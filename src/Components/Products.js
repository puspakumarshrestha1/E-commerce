import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Product from './Product';
import axios from "axios";

function Products() {
    const [products, setProducts]=useState([])
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then(res => {
          console.log(res.data);
          setProducts(res.data)
        });
    },[])
  return (
    <>
    <Container className='products m-auto'>
        <Row>
            <Col>
            <h2 className='py-4'>Products Of Your Interest</h2>
            </Col>
        </Row>
        <Row>
           
            {products.slice(12,20).map((items)=>(
                <Col lg={3}>
             <Product key={items.id} {...items}/>
             </Col>
                         
             ))}
            
           
        </Row>
        <Row>
            <Col className='text-center py-3'>
            <Button className='py-2 px-4 border-0'>Load More</Button>
            </Col>
        </Row>
    </Container>
      
    </>
  )
}

export default Products
