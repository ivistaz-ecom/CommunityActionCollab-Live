"use client"
import React from 'react';
import {Row, Col, Container, Card} from 'react-bootstrap'
import Image from 'next/image';
import Link from 'next/link'

function JoinUs() {
  return (
    <>
          <Container className='g-0 overflow-hidden'>
          <Container className='mt-4 '>
        <Row fluid>
           <Col className=''>
              <h1 className='t-action fs-1 fw-light'>Join Us</h1>
              <p className='p-action fs-5 fw-light'> We’re looking to partner with organisations and individuals aspiring to empower vulnerable communities to build their resilience against any humanitarian crises.</p>
           </Col> 
</Row>
</Container>

      </Container>
<Container fluid className=''>
    <Row>
        <Col lg={6} className='Partner-With-Us' >

        </Col>
        <Col lg={6} className='Partner-With-Us-1 '>
            <h2 className='t-partner fs-1 fw-light'>
            Partner With Us
            </h2>
            <p className='p-partner fs-5 fw-light'>Implementing Organisations: NGOs, CBOs and Government bodies working at the grassroots level.</p>
            <a href='https://registration.communityactioncollab.org/partner-sign-up/new'className='btn btn-partner'>
                JOIN US
            </a>
           
        </Col>
    </Row>
    
    <Row>
        
        <Col lg={6} className='volunteer-1 order-1 order-lg-0 overflow-hidden'>
            <h2 className='t-volunteer fs-1 fw-light'>
            Volunteer With Us
            </h2>
            <p className='p-volunteer pt-4 fs-5 fw-light'>We invite stellar, driven and passionate volunteers who’d like to contribute to resilience building within vulnerable communities.</p>
            <p className='mail-us fs-5 mb-0'>Write to us at</p>
            <a href='mailto:communityactioncollab@catalysts.org'>communityactioncollab@catalysts.org</a>
        </Col>
        <Col lg={6} className='volunteer order-0'>
           
        </Col>
    </Row>
    <Row>
        <Col lg={6} className='Invest '> 
        </Col>
        <Col lg={6} className='Invest-1 '>
            <h2 className='t-partner fs-1 fw-light'>
            Invest In Community Action Collab
            </h2>
            <p className='p-partner fs-5 fw-light'>Community Action Collab isn’t merely an aggregation of partners but an aggregation of capacities, through which key high-impact initiatives have been developed.</p>
            <Link href='/invest-for-change'className='btn btn-partner'>
               FIND OUT MORE
            </Link>
           
        </Col>
    </Row>
</Container>


    </>
  )
} 

export default JoinUs
