import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function TrendSummer() {
  return (
    <>
      <Container className='trend pb-5'>
        <Row>
            <Col>
            <div className='overflow'>
            <img className='w-100 ' src='https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/banner-fashion2-full.webp' alt=''/>
            </div>
            <div className="trend-text"> 
                    <h2>The Best Trend of Summer</h2>
                    <h6 className=" my-3">eCommerce Web Design Project</h6>
                    <button className="btn banner-btn1 d-block m-auto px-4 py-2">Shop Now</button>
                    </div>
            </Col>

        </Row>
      </Container>
    </>
  )
}

export default TrendSummer
