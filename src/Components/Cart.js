import React from 'react'
import { Button, Col, Container, Form, Row, Table } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import CartsItems from './CartsItems';
import Trending from './Trending';
function Cart() {
  const { cartItems, totalAmount, quantity } = useSelector((state) => state.cart);
  return (
    <>
      <Container className='cart'>
        <Row>
          <Col lg={8}>
            {cartItems.map((items) => (
              <CartsItems key={items.id} {...items} />
            ))}
          </Col>
          <Col lg={4} className='text-center my-3'>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Cart Totals</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Container  className='py-3'>
                      <Row>
                        <Col lg={6} className='text-start'>
                          <h5>SubTotal</h5>
                        </Col>
                        <Col lg={6} className='text-end'>
                          <h5>{totalAmount} $</h5>
                        </Col>
                      </Row>
                    </Container>

                  </td>

                </tr>
                <tr>
                  <td>
                    <Container  className='py-3'>
                      <Row>
                        <Col lg={6} className='text-start'>
                          <h5>Shipping</h5>
                        </Col>
                        <Col lg={6} className='text-end'>
                          <Form>
                            <Form.Check
                              type="switch"
                              id="custom-switch"
                              label="Free Shipping"
                            />
                            <Form.Check
                              type="switch"
                              label="Online Payment"
                              id="custom-switch"
                            />
                             <Form.Check
                              type="switch"
                              label="Cash On Delivery"
                              id="custom-switch"
                            />
                          </Form>
                        </Col>
                      </Row>
                    </Container>
                  </td>

                </tr>
                <tr>
                  <td>
                  <Container className='py-3'>
                      <Row>
                        <Col lg={6} className='text-start'>
                          <h5>TotalAmount</h5>
                        </Col>
                        <Col lg={6} className='text-end'>
                          <h5>{totalAmount} $</h5>
                        </Col>
                      </Row>
                    </Container>
                  </td>

                </tr>
                <tr>
                  <td>
                  <Container className='py-3'>
                      <Row>
                        <Col className='text-center'>
                         <Button className='border-0'>Proceed To CheckOut</Button>
                        </Col>
                      </Row>
                    </Container>
                  </td>

                </tr>
              </tbody>
            </Table>

            {/* <h2>TotalAmount : {totalAmount} $</h2>
            <h2> Quantity: {quantity}</h2>
            <Button className='py-2 px-3 my-3 '>Confirm Purchase</Button> */}
          </Col>
        </Row>
        <Row>
          <Col>
          <Trending/>
          </Col>
        </Row>


      </Container>
    </>
  )
}
export default Cart
