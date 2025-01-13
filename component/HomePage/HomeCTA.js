/* eslint-disable jsx-a11y/alt-text */
"use client"
import React from 'react'
import {Row, Col, Container} from 'react-bootstrap'
import Image from 'next/image'
import Link from 'next/link'


function HomeCTA() {
  return (
    <>
      <Container fluid className='cta-banner'>
        <Container className=''>
          <Row className='d-lg-flex flex-lg-row'>
            <Col className='order-1 order-lg-0' lg={4} sm={6} md={6} xs={6}>
            <Image src="/images/man.png" width={400} height={550} className='img-fluid'/>
            </Col>
            <Col className='d-flex justify-content-center align-items-center order-0 order-lg-1' lg={4} sm={12} md={12} xs={12}>
              <Row className='d-flex flex-column'><Col>
            <p className='fs-5 text-white fw-light mt-lg-0 mt-5'>
            Taking the legacy of #COVIDActionCollab forward, Community Action Collab orchestrates and influences the actions and decisions of its partners, the Government and other alliances, enabling them to solve issues affecting 10 million vulnerable people and ensuring they access critical livelihood, health, social protection and climate impact solutions.
              </p></Col><Col className='text-center mt-4'>
                <Link href="/about-us" className='b-btn p-3 rounded-3 text-decoration-none text-black'>FIND OUT MORE</Link>
                </Col></Row>
            </Col>
            <Col  className='order-2' lg={4} sm={6} md={6} xs={6}>
            <Image src="/images/women.png" width={400} height={550} className='img-fluid'/>
            </Col>
          </Row>
        </Container>


      </Container>

    </>
  )
}

export default HomeCTA
