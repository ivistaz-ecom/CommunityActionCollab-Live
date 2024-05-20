// components/Banner.js
"use client"
import React from 'react';
import { Col,Row, Container } from 'react-bootstrap';
import CountUp from "react-countup"
import { Navbar, NavDropdown } from 'react-bootstrap';

function Banner() {
  return (
    <Container className='banner-bg d-flex align-items-end g-0' fluid style={{
      backgroundImage: 'url(/images/imapact-banner.png)'
    }}>
      <Container style={{
  backgroundImage: 'linear-gradient(90deg, #1c7c9cf0 28%, #fd9c00e0 91%)'
}} className='g-0 middle pt-5' fluid>
<Row >
          <Col lg={2} className='border-end'>
        <CountUp
                  start={0}
                  end={375}
                  separator=" "
                  prefix=""
                  suffix=""
                  className="increment-impact"
            ></CountUp>
            <p className='fs-4 fw-light'>Partners of CAC</p>
        </Col>
        <Col lg={2} className='border-end'>
        <CountUp
                  start={0}
                  end={34}
                  separator=" "
                  prefix=""
                  suffix=""
                  className="increment-impact"
            ></CountUp>
            <p className='fs-4 fw-light'>States & UTs</p>
        </Col>
        <Col lg={2} className='border-end'>
        <CountUp
                  start={0}
                  end={13}
                  separator=" "
                  prefix=""
                  suffix=""
                  className="increment-impact"
            ></CountUp>
            <p className='fs-4 fw-light'>Vulnerable Communities</p>
        </Col>
        <Col lg={2} className='border-end'>
        <CountUp
                  start={0}
                  end={2000}
                  separator=","
                  prefix=""
                  suffix="+"
                  className="increment-impact"
            ></CountUp>
            <p className='fs-4 fw-light'>Volunteers</p>
        </Col>
        <Col lg={2}>
        <CountUp
                  start={0}
                  end={28}
                  separator=" "
                  prefix=""
                  suffix="M"
                  className="increment-impact"
            ></CountUp>
            <p className='fs-4 fw-light'>Services Instances</p>
        </Col>
        <Col lg={2} className='border-start'>
        <CountUp
                  start={0}
                  end={46}
                  separator=","
                  prefix="$"
                  suffix="M"
                  className="increment-impact"
            ></CountUp>
            <p className='fs-4 fw-light'>Resources<br/>Raised</p>
        </Col>
      </Row>

      </Container>
     

    </Container>
  );
};

export default Banner;
