import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'
import Slider from './Slider'

function Content() {
  return (
    <Container fluid className="invest-bg">
          <Container className='d-flex justify-content-center pt-5 pb-5'>
              
              <div className='invest-border'>
                  <h2 className='fs-1'>Community Action in Focus</h2>
                  <p className='fs-5'>Community Action Collab, carrying on the legacy of #COVIDActionCollab, orchestrates and influences the actions and decisions of its partners and the government. This has allowed us to solve issues affecting millions of vulnerable people and ensure they have access to critical livelihood, health and social protection.</p>
</div>
          </Container>
          <Container id="impact">
              <Row><Col lg={8} sm={12}>
                  <h2 className='fs-1'>The Collaborative Impact</h2>
                  <p className='fs-5'>We believe that resilient communities can prepare, adapt and emerge stronger in response to exogenous stresses and challenges. This not only sustains essential functions but also goes further toward improving environmental, social and economic health and well-being.</p>
                  <p className='fs-5'>This kind of resilience can only be built through constant collaboration, where looking out for and after each other becomes a way of life.</p>
              </Col><Col lg={4} sm={12}>
                      <Image src="/images/impact-banner.png" width={300} height={300}/>
                  </Col></Row>
          </Container>
          <Container className='i-banner mt-5 mx-auto'>
              <p className='fs-5'>We’re working towards an equitable tomorrow. When you invest in CAC, you are investing in a <b>360+</b> strong network of organisations that make changes happen. Enabling the most vulnerable people to survive any humanitarian crises and thrive through collaborative action.</p>
          </Container>
          <Container className='i-banner mt-5 mx-auto'>
              <Row>
                  <Col>
                  <div className="card mb-3 border-0" style={{background:'#ffffff00'}}>
  <div className="row g-0">
    <div className="col-md-1 d-flex justify-content-center">
      <img src="/images/social-care.png" className="" alt="Reached 13 categories of most vulnerable groups" width={50} height={50} />
    </div>
    <div className="col-md-11">
      <div className="card-body">
        <h5 className="card-title">Reached <span className='fs-3 fw-bold'>13</span> categories of most vulnerable groups</h5>
      </div>
    </div>
  </div>
</div>
                  </Col>
                  <Col lg={12}>
<div className="card mb-3 border-0" style={{background:'#ffffff00'}}>
  <div className="row g-0">
    <div className="col-md-1 d-flex justify-content-center">
      <Image src="/images/noun-service.png"  alt="2.8 Cr service instances" width={50} height={50} />
    </div>
    <div className="col-md-11">
      <div className="card-body">
        <h5 className="card-title"><span className='fs-3 fw-bold'>2.8 Cr</span> service instances</h5>
      </div>
    </div>
  </div>
</div>
                  </Col>
                  <Col lg={12}>
                  <div className="card mb-3 border-0" style={{background:'#ffffff00'}}>
  <div className="row g-0">
  <div className="col-md-1 d-flex justify-content-center">
      <Image src="/images/noun-development-solutions.png"  alt="22 innovative solutions for unique, difficult issues" width={50} height={50} />
    </div>
    <div className="col-md-11">
      <div className="card-body">
        <h5 className="card-title"><span className='fs-3 fw-bold'>22</span> innovative solutions for unique, difficult issues</h5>
      </div>
    </div>
  </div>
</div>
                  </Col>
                  <Col lg={12}>
                  <div className="card mb-3 border-0" style={{background:'#ffffff00'}}>
  <div className="row g-0">
  <div className="col-md-1 d-flex justify-content-center">
      <Image src="/images/noun-partnership.png"  alt="360+ partners | 1,000+ exchanges" width={50} height={50} />
    </div>
    <div className="col-md-11">
      <div className="card-body">
        <h5 className="card-title"><span className='fs-3 fw-bold'>360+</span> partners | <span className='fs-3 fw-bold'>1,000+</span> exchanges</h5>
      </div>
    </div>
  </div>
</div>
</Col>
<Col lg={12}>
                  <div className="card mb-3 border-0" style={{background:'#ffffff00'}}>
  <div className="row g-0">
  <div className="col-md-1 d-flex justify-content-center">
                                  <Image src="/images/noun-india.png"  alt="Pan India presence: 36 States & UTs" width={50} height={50} />
    </div>
    <div className="col-md-11">
      <div className="card-body">
        <h5 className="card-title">Pan India presence: <span className='fs-3 fw-bold'>36</span> States & UTs</h5>
      </div>
    </div>
  </div>
</div>
</Col>                  

                  

             </Row>
          </Container>
          <Container className='mt-5'>
              <h2 className='fs-1 fw-light'>Building for Future</h2>
              <p className='fs-5'>Keeping in mind that the consequences of the pandemic are far from over, we aim to future-ready resilient communities. Our goal is to prepare vulnerable groups to take control of the situation of VUCA (Volatility, Uncertainty, Complexity and Ambiguity) that exists in the world.</p>
          </Container>
          <Container>
              <h2 className='fs-1 fw-light'>Sustainable Development Goals</h2>
              <Row>
                  <Col className='g-1 col-sm-auto col-md-6 col-lg-1 flex-lg-fill' ><Image src="/images/development.png" width={150} height={150} className='w-100 h-100'/></Col>
                  <Col className='g-1 col-sm-auto col-lg-1 flex-lg-fill' ><Image src="/images/development-1.png" width={100} height={100} className='w-100 h-100'/></Col>
                  <Col className='g-1 col-sm-auto col-lg-1 flex-lg-fill' ><Image src="/images/development-2.png" width={100} height={100} className='w-100 h-100'/></Col>
                  <Col className='g-1 col-sm-auto col-lg-1 flex-lg-fill' ><Image src="/images/development-3.png" width={100} height={100} className='w-100 h-100'/></Col>
                  <Col className='g-1 col-sm-auto col-lg-1 flex-lg-fill' ><Image src="/images/development-4.png" width={100} height={100} className='w-100 h-100'/></Col>
                  <Col className='g-1 col-sm-auto col-lg-1 flex-lg-fill' ><Image src="/images/development-5.png" width={100} height={100} className='w-100 h-100'/></Col>
                  <Col className='g-1 col-sm-auto col-lg-1 flex-lg-fill' ><Image src="/images/development-6.png" width={100} height={100} className='w-100 h-100'/></Col>
                  <Col className='g-1 col-sm-auto col-lg-1 flex-lg-fill' ><Image src="/images/development-7.png" width={100} height={100} className='w-100 h-100'/></Col>
                  <Col className='g-1 col-sm-auto col-lg-1 flex-lg-fill' ><Image src="/images/development-8.png" width={100} height={100} className='w-100 h-100'/></Col>
                  <Col className='g-1 col-sm-auto col-lg-1 flex-lg-fill' ><Image src="/images/development-9.png" width={100} height={100} className='w-100 h-100'/></Col>
              </Row>
          </Container>
          <Slider/>
    </Container>
  )
}

export default Content
