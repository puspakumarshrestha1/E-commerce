import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import { addToCart, removeFromCart, addItemQuantity, subtractItemQuantity } from './CartSlicer'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
function Trends({id,image,price,title}) {
  const dispatch = useDispatch()

    return (
        <>
      
      <Card className='border-0 pt-3' style={{ width: '16rem' }}>
      <Card.Img  variant="top" src={image} className='cardimg position-relative' />
      <Card.Body>
      <Card.Title><Link to={`/details/${id}`}>{title}</Link></Card.Title>
        <Card.Text>
        <span className='discount'>-25%</span>
      <div className='icons'>
        <a href=''><i class="bi bi-bag"></i></a>
        <Link to={`/details/${id}`}><i class="bi bi-eye"></i></Link>
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

export default Trends

