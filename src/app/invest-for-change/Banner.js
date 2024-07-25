import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";

function Banner() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1 className="d-none d-sm-block fw-bolder" style={{fontSize:"78px"}}>
              Catalysing
              <br />
              Change
            </h1>
            <h1 className="d-block d-sm-none fw-bolder" style={{fontSize:"50px"}}>
              Catalysing
              <br />
              Change
            </h1>
          </Col>
          <Col className="pt-lg-5 pb-lg-0 pb-3">
            <div className="highlighted-text">
              <mark className="highlight">
                Create sustainable impact by investing in our humanitarian
                emergency platform.
              </mark>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Image
          src="/images/invest-banner.png"
          width={800}
          height={500}
          className="w-100 h-100"
        />
      </Container>
    </div>
  );
}

export default Banner;
