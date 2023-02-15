import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import axios from "axios";
import Trends from './Trends';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  

function Trending() {
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
    <Container className='trending py-4'>
        <Row>
            <Col>
            <h2 className='py-3'>Trending Products</h2>
            </Col>
        </Row>
        <Row>
        <OwlCarousel items={4} margin={8} autoplay ={true} loop={true} >
           {products.map((items)=>(
            <Trends key={items.id} {...items}/>
            ))}
              </OwlCarousel>
       </Row>

    </Container>
      
    </>
  )
}

export default Trending
