import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

function Email() {
  return (
    <>
    <Container className='signup my-3'>
        <Row>
            <Col lg={6} className='py-5 my-5 ms-5'>
              <h3 className='text-light text-start py-4'>Subscribe Our Newsletter & <br/>
Get 30% Discounts For Next Order</h3>
<Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Button className='border-0'>Submit</Button>
      
    </Form>

            </Col>
        </Row>
    </Container>
      
    </>
  )
}

export default Email
