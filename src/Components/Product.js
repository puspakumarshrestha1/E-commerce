import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import { addToCart, removeFromCart, addItemQuantity, subtractItemQuantity } from './CartSlicer'
import { useSelector, useDispatch } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'

function Product({id,image,price,title}) {
  const dispatch = useDispatch()

    return (
        <>
      <Card className='border-0 py-3' style={{ width: '16rem' }}>
      <Card.Img  variant="top" src={image} className='cardimg position-relative' />
      
      
      <Card.Body>
        
        <Card.Title><Link to={`/details/${id}`}>{title}</Link></Card.Title>
        
        <Card.Text>
        <span className='discount'>-25%</span>
      <div className='icons'>
      <LinkContainer to="cart">
        <p className='fs-5'><i class="bi bi-bag"></i></p>
        </LinkContainer>
        <a href=''><i class="bi bi-eye"></i></a>
        <a href=''><i class="bi bi-heart"></i></a>
      </div>
      <Button onClick={() => dispatch(addToCart({ id, image, title, price }))}>Add To Cart</Button>
            <p><i class="bi bi-star-fill text-warning"></i> <i class="bi bi-star-fill text-warning"></i> <i class="bi bi-star-fill text-warning"></i> <i class="bi bi-star-fill text-warning"></i> <i class="bi bi-star-fill text-warning"></i> </p>
        <h6 className='text-danger'>Price: {price} &nbsp; <del>$500 </del></h6>
        </Card.Text>
      </Card.Body>
    </Card>
    
        </>
    )
}

export default Product
