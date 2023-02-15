import React from 'react'
import { Button, Table } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'
import { addToCart, removeFromCart, addItemQuantity, subtractItemQuantity } from './CartSlicer'

function CartsItems({id,image,price,title}) {
    const dispatch = useDispatch()
  return (
    <>
    <Table striped bordered hover size="sm" className='table align-middle text-center'>
      <thead>
        <tr>
        <th scope="col">Id</th>
          <th scope="col">Image</th>
          <th scope="col">Title</th>
          <th scope="col"> Price</th>
          <th scope="col">Remove Item</th>
          <th scope="col">Add Quantity</th>
        </tr>
      </thead>
      <tbody>
        <tr>
        <td><h4>{id}</h4></td>
          <td><img className='cart-img w-100' src={image} /></td>
          <td><LinkContainer to={`/details/${id}`}> 
          <h4> {title}</h4> 
          </LinkContainer></td>
          <td><h4>{price}$</h4></td>
          <td><Button  className='mx-2 bg-danger text-dark border-0' onClick={()=>dispatch(subtractItemQuantity({id, image, title, price}))}><i class="bi bi-trash fs-4"></i></Button></td>
          <td><Button className='mx-2 border-0' onClick={()=>dispatch(addItemQuantity({id, image, title, price}))}>Add Quantity</Button></td>
        </tr>
      </tbody>
    </Table>
  </>
  )
}

export default CartsItems
