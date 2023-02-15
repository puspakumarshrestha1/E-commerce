import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
function Main() {
  return (
    <>
   
    <OwlCarousel className='owl-theme' loop margin={10} items={1} dots={false}>
        <div className='banner-1 position-relative'>
       
            <div className='position-absolute banner-text'>
            <h4>SUMMER 2023</h4>
            <h2>New Arrival Collection</h2>
            <Button className='bg-warning border-0 p-2 banbtn'>Shop Now</Button>
            </div>
           
            <img className='w-100' src='https://cdn.shopify.com/s/files/1/0025/5082/5007/files/slider03.jpg?v=1613173997' alt=''/>
           
        </div>
        <div className='banner-2 position-relative'>
        <div className='position-absolute banner-text'>
            <h4>SUMMER SALE</h4>
            <h2>Save up to 70%</h2>
            <Button className='bg-warning border-0 p-2 banbtn'>Shop Now</Button>
            </div>
            <img className='w-100' src='https://cdn.shopify.com/s/files/1/0025/5082/5007/files/slider02.jpg?v=1613173997' alt=''/>
        </div>
    </OwlCarousel>
     
    </>
  )
}

export default Main
