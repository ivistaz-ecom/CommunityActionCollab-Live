import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';


function PartnersAnchoring() {
  return (
    <>
      <Container className='text-center pt-3 pb-5 mx-auto'>
        <Row>
            <Col className='pt-4 pb-3'>
            <h3 className='t-Anchoring fs-1 fw-light'>Partners Anchoring Economic Resilience</h3>
            <p className='fs-5 fw-light'>The Pilot is led by Vrutti and funded by Skoll Foundation and Vitol Foundation. The implementing partners are Head Held High, Transform Rural India Foundation, and Gopabandu Seva Parishad.</p>
            </Col> 
        </Row>
        <Row>
        <Col lg={2} sm={6} xs={6} md={6} className="mb-3">
            <Image src="/images/virruti.png"  width={152} height={100} alt="virruti" className=''/>
          </Col>
          <Col lg={2} sm={6} xs={6} md={6}className="mb-3">
          <Image src="/images/skill.png"  width={152} height={100} alt="virruti" className=''/></Col>
           <Col lg={2} sm={6} xs={6} md={6}className="mb-3"> <Image src="/images/vital.png"  width={152} height={100} alt="virruti" className=' mb-2'/></Col>
           <Col lg={2} sm={6} xs={6} md={6}className="mb-3"> <Image src="/images/Head.png"  width={152} height={100} alt="virruti" className=''/></Col>
            <Col lg={2} sm={6} xs={6} md={6}className="mb-3"><Image src="/images/tri.png"  width={152} height={100} alt="virruti" className=''/></Col>
           <Col lg={2} sm={6} xs={6} md={6}className="mb-3"> <Image src="/images/gopabanadhu.png"  width={152} height={100} alt="virruti" className=''/></Col>
            
        </Row>
      </Container>
    </>
  )
}

export default PartnersAnchoring
