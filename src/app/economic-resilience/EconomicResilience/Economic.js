import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";

function Economic() {
  return (
    <>
      <Container className="mt-5 mb-5">
        <Row>
          <Col lg={6} className="Why_Economic_Resilience"></Col>
          <Col lg={6} className="Economic_Resilience">
            <h3 className="t-economic fs-1 fw-light">Why Economic Resilience?</h3>
            <p className="p-economic fs-5 fw-light">
              A critical component for building resilient communities is
              building their economic resilience. Community Action Collab’s
              (CAC) Economic Resilience Impact Canvas builds the resilience of
              vulnerable populations by enabling them to withstand any
              humanitarian crisis. The Impact Canvas is co-creating
              interventions within a community of various service providers,
              government agencies, financial entities, and civil societies. The
              initiative is about building resilience in a manner that restores
              hope and power within the hands of vulnerable communities.
            </p>
          </Col>
        </Row>

        <Row>
          <Col lg={10} sm={12} xs={12} className="mt-5 Economic_Resilience_icon mx-auto">
            <div className="card  d-lg-flex flex-lg-row border-0">
              <Image
                src=" /images/icon_1_Why_Economic_Resilience-1.svg"
                width={80}
                height={80}
                alt="Card 2"
              />
              <div className="card-body">
                <p className="card-text p-card-economic fs-5 fw-light">
                  While economic resilience needs to be achieved at the family
                  level, there is a need to work within and beyond the family.
                  Together with the partners and advisors of the Impact Canvas,
                  CAC has established an evolving framework with four key
                  approaches to building economic resilience i.e. Conservation,
                  Diversification, Aggregation, and Risk Pooling (CDAR).
                </p>
              </div>
            </div>
            <div className="card  d-lg-flex flex-lg-row border-0">
              <Image
                src="/images/icon_2_Why_Economic_Resilience-1.svg-1.svg"
                width={80}
                height={80}
                alt="Card 2"
              />
              <div className="card-body">
              <p className="card-text p-card-economic fs-5 fw-light">
                  Economic resilience is more than just facilitating services to
                  vulnerable populations; it is also about instilling hope and
                  aspirations, cultivating an opportunity mindset, gaining the
                  ability to make and shape decisions, and so on. To
                  successfully implement this, it is essential that the work is
                  done collaboratively with the Government, Private Sector,
                  Civil Society Organisation and Communities who need to be at
                  the centre.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Economic;
