"use client"
import React from 'react';
import {Row, Col, Container, Card} from 'react-bootstrap'
import Image from 'next/image';


function JoinUs() {
  return (
    <>

<Container fluid className=''>
    <Row>
        <Col lg={6} className='Partner-With-Us' >

        </Col>
        <Col lg={6} className='Partner-With-Us-1 '>
            <h2 className='fs-1 fw-light text-white'>
            Partner With Us
            </h2>
                      <p className='fs-5 text-white fw-light'>We’re looking to partner with:</p>
                      <ul>
                        <li className='fs-5 text-white fw-light'>Implementing Organisations: NGOs, CBOs and Government bodies working at a grassroots level.</li>
                        <li className='fs-5 text-white fw-light'>Providers: Organisations with resources such as HR, technology, materials, finance, etc.</li>
                        <li className='fs-5 text-white fw-light'>Enablers: Industry Associations, Policy Think Tanks and Academia. Join our pan-India collaborative that contributes to building resilience among vulnerable communities.</li>
                        
                      </ul>
            <a href='https://registration.communityactioncollab.org/partner-sign-up/new'className='btn btn-partner'>
                JOIN US
            </a>
           
        </Col>
    </Row>
    
    <Row>
        
        <Col lg={6} className='volunteer-1 order-1 order-lg-0'>
            <h2 className='fs-1 fw-light'>
            Volunteer With Us
            </h2>
            <p className='pt-4 fs-5 fw-light'>We invite stellar, driven and passionate volunteers who’d like to contribute to <br/>resilience building within vulnerable communities.</p>
            <p className='mail-us fs-5 mb-0'>Write to us at</p>
            <a href='mailto:COMMUNITYACTIONCOLLAB@CATALYSTS.ORG'>communityactioncollab@catalysts.org</a>        
        </Col>
        <Col lg={6} className='volunteer order-0'>
           
        </Col>
    </Row>
    <Row>
        <Col lg={6} className='Invest'> 
        </Col>
        <Col lg={6} className='Invest-1'>
            <h2 className='fs-1 text-white fw-light'>
            Invest In Community Action Collab
            </h2>
            <p className='fs-5 text-white fw-light'>Community Action Collab isn’t merely an aggregation of partners but an aggregation of capacities, through which key high-impact initiatives have been developed.</p>
            <a href=''className='btn btn-partner'>
               FIND OUT MORE
            </a>
           
        </Col>
    </Row>
</Container>


    </>
  )
} 

export default JoinUs
