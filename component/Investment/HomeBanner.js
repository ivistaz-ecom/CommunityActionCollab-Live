import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
function HomeBanner() {
  return (
      <Container fluid style={{background:'#E8F7FF'}}>
          <Container>
              <Row className='flex-column d-flex flex-lg-row'>
                  <Col className='justify-content-center d-flex align-items-center flex-column order-1 order-lg-0'>
            <p className='fs-1 text-center fw-bold lh-1'>Uniting for Resilience:<br />Transforming Vulnerable<br/>Communities</p>
            <Link className='me-4 fs-6 btn btn-primary rounded-0 text-black d-block d-lg-none my-4' href="#invest" style={{background:'#FDD800',border:'1px solid #DEBE00'}}>Invest in resilience</Link>
                  </Col>
<Col className='order-0 order-lg-1'>
<div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="1" aria-label="Slide 2"></button>
    
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="3000">
      <img src="investment/component.png" class="d-block w-100" alt="cac investment 2024"/>
    </div>
    <div class="carousel-item" data-bs-interval="3000">
      <img src="investment/component2.png" class="d-block w-100" alt="cac investment 2024"/>
    </div>

  </div>
  {/* <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button> */}
</div>
                  </Col>
              </Row>
          </Container>
      </Container>
  )
}

export default HomeBanner
