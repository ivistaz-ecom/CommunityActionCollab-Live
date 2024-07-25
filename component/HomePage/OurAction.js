"use client"
import React from 'react';
import {Row, Col, Container, Card} from 'react-bootstrap'
import Image from 'next/image'
import Link from 'next/link'

export default function OurAction() {
  return (
    <>
    <Container >
      
      <Container className='mt-4 mb-4'>
        <Row>
           <Col className=''>
              <h1 className='t-action fs-1 fw-light'>Our Action</h1>
              <p className='p-action fs-5 fw-light'> CAC deploys a three-pronged approach to build the resilience of vulnerable communities to not just survive but also thrive amidst a crisis:</p>
           </Col> 
</Row>
        </Container>
        </Container>
<Container fluid  className='g-0 gradient'>
        <Container fluid>
          <Row>
            
            <Col style={{ background: '#3690C0' }} className='' sm={12} lg={3}>      
            <div class="card border-0 mt-5 mb-5" style={{ background: '#3690C0' }}>
  <Image src="/images/015-Build-Blockchain.svg" class="" alt="..." width={80} height={80} />
  <div class="card-body">
    <h5 class="card-title fs-2 text-white">Orchestrate</h5>
    <p class="card-text text-white fs-5 fw-light">Functional governance systems that cause dynamic network effects, with nodes to actively address the needs of the vulnerable and enable human capital for emergency response.</p>
  </div>
</div>
</Col>
<Col className='triangle-right d-lg-block' lg={1}></Col>
<Col style={{ background: '#FDD700' }} className='' sm={12} lg={3}>
              
            <div class="card border-0 mt-5 mb-5" style={{ background: '#FDD700' }}>
  <Image src="/images/influencer.svg" class="" alt="..." width={80} height={80} />
  <div class="card-body">
    <h5 class="card-title fs-2">Influence</h5>
    <p class="card-text fs-5 fw-light">Significant policy and practice changes. Amplify components/issues through global collaboration.</p>
  </div>
</div>
</Col>
<Col className='triangle-right-1 d-lg-block' lg={1}></Col>
            <Col style={{ background: '#272727' }} className='' sm={12} lg={3}>
              
            <div class="card border-0 mt-5 mb-5" style={{ background: '#272727' }}>
  <Image src="/images/business-and-finance.svg" class="" alt="..." width={80} height={80} />
  <div class="card-body">
    <h5 class="card-title fs-2 text-white">Solve</h5>
    <p class="card-text text-white fs-5 fw-light">Scalable solutions, response time and district level integrated action.</p>
  </div>
</div>

            </Col>
        </Row>

        </Container>
        


      </Container>

      <Container className='mt-4 text-center'>
      <Link href="/action" className="btn btn-action">LEARN MORE</Link>  
      </Container>


    </>


    
  )
}
