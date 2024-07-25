"use client";
import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Image from "next/image";
import { Container, Row, Col, Card } from "react-bootstrap";

function FrameworkAccordion() {
  // State to manage the open state of each accordion item
  const [activeKey, setActiveKey] = useState();

  // Function to handle accordion item toggle
  const handleAccordionToggle = (eventKey) => {
    setActiveKey(activeKey === eventKey ? null : eventKey);
  };

  return (
    <>
      <Container fluid className="cdar text-center">
        <Row>
          <Col>
            <h2 className="fs-1 fw-light mb-2">CDAR Framework</h2>
          </Col>
        </Row>
        <Row className=" d-flex justify-content-center">
          <Col lg="">
            <Accordion activeKey={activeKey}className="mx-auto container">
              <Accordion.Item eventKey="0">
                <Accordion.Header onClick={() => handleAccordionToggle("0")}>
                  <div className="card d-flex flex-row border-0">
                    <Image
                      src="/images/Conservation_icon-1.svg"
                      width={60}
                      height={60}
                      alt="Card 2"
                    />
                    <div className="card-body">
                      <h5 className="card-title fs-5">1. Conservation</h5>
                      <p className="card-text p-card-economic fs-5 fw-light">
                        Focus on protecting the existing resources and sources
                        of income and reducing expenses by meeting the basic
                        needs.
                      </p>
                    </div>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <Col  className=" ">
                    <div className="card d-flex flex-row border-0">
                      <Image
                        src=" /images/icon_Reduce_expenses-1.svg"
                        width={40}
                        height={40}
                        alt="Card 2"
                      />
                      <div className="card-body">
                        <h5 className="card-title  fs-5">Reduce expenses</h5>
                        <p className="card-text p-card-economic fs-5 fw-light">
                          Through initiatives like providing access to social
                          protection schemes like PDS, MGNREGA job cards,
                          housing schemes, scholarships, and health insurances
                          to meet expenses of day-to-day life.
                        </p>
                      </div>
                    </div>
                    <div className="card   d-flex flex-row border-0">
                      <Image
                        src="/images/Protect_icon-1.svg"
                        width={40}
                        height={40}
                        alt="Card 2"
                      />
                      <div className="card-body">
                        <h5 className="card-title fs-5">
                          Protect the resources and sources of income of the
                          poor
                        </h5>
                        <p className="card-text p-card-economic fs-5 fw-light">
                          This could be achieved through drought-proofing of
                          farms, insuring assets or vaccination of livestock and
                          immunisation of children, etc.
                        </p>
                      </div>
                    </div>
                  </Col>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header onClick={() => handleAccordionToggle("1")}>
                  <div className="card d-flex flex-row border-0">
                    <Image
                      src="/images/Diversification.svg"
                      width={60}
                      height={60}
                      alt="Card 2"
                    />
                    <div className="card-body">
                      <h5 className="card-title fs-5">2. Diversification</h5>
                      <p className="card-text p-card-economic fs-5 fw-light">
                        Bring in more income-generating aspects to the existing
                        source of income and reduce the risk of one source being
                        affected by a shock.
                      </p>
                    </div>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <Col  className=" ">
                    <div className="card d-flex flex-row border-0">
                      <Image
                        src=" /images/help_the_family_save_and_build_icon-1.svg"
                        width={40}
                        height={40}
                        alt="Card 2"
                      />
                      <div className="card-body">
                        <h5 className="card-title fs-5">
                          Help the family save and build a larger diverse asset
                          base
                        </h5>
                        <p className="card-text p-card-economic fs-5 fw-light">
                          In the short run, cash, livestock, chits, etc. could
                          be built and in the long run assets like
                          gold/durables/house/education of children, etc.
                        </p>
                      </div>
                    </div>
                    <div className="card   d-flex flex-row border-0">
                      <Image
                        src="/images/help_the_family_icon-1.svg"
                        width={40}
                        height={40}
                        alt="Card 2"
                      />
                      <div className="card-body">
                        <h5 className="card-title fs-5">
                          Help the family have multiple revenue sources
                        </h5>
                        <p className="card-text p-card-economic fs-5 fw-light">
                          This could be wages, nano- enterprises, skill
                          development, pensions, remittances, govt transfers,
                          assets which are different risk factors.
                        </p>
                      </div>
                    </div>
                  </Col>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header onClick={() => handleAccordionToggle("2")}>
                  <div className="card d-flex flex-row border-0">
                    <Image
                      src="/images/Aggregation.svg"
                      width={60}
                      height={60}
                      alt="Card 2"
                    />
                    <div className="card-body">
                      <h5 className="card-title fs-5">3. Aggregation</h5>
                      <p className="card-text p-card-economic fs-5 fw-light">
                        Coming together to create better social capacity through
                        collective voices and better negotiation of interests
                        among different actors
                      </p>
                    </div>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <Col  className=" ">
                    <div className="card d-flex flex-row border-0">
                      <Image
                        src=" /images/Aggregation-and-organisation-around-production-1.svg"
                        width={40}
                        height={40}
                        alt="Card 2"
                      />
                      <div className="card-body">
                        <h5 className="card-title fs-5">
                          Aggregation and organisation around production
                        </h5>
                        <p className="card-text p-card-economic fs-5 fw-light">
                          Higher income to smallholders/labourers can be
                          realised when they lower input cost, negotiate with
                          scale in the market, etc.
                        </p>
                      </div>
                    </div>
                    <div className="card   d-flex flex-row border-0">
                      <Image
                        src="/images/Collective-identity-around-social-groupings-1.svg"
                        width={40}
                        height={40}
                        alt="Card 2"
                      />
                      <div className="card-body">
                        <h5 className="card-title fs-5">
                          Collective identity around social groupings
                        </h5>
                        <p className="card-text p-card-economic fs-5 fw-light">
                          Changes in social terms comes when one gets social
                          status and able to get mutual support system to
                          address adversaries.
                        </p>
                      </div>
                    </div>

                    <div className="card   d-flex flex-row border-0">
                      <Image
                        src="/images/Collective-voices.svg"
                        width={40}
                        height={40}
                        alt="Card 2"
                      />
                      <div className="card-body">
                        <h5 className="card-title fs-5">Collective voices</h5>
                        <p className="card-text p-card-economic fs-5 fw-light">
                          Building capacity of the communities to voice their
                          collective opinions, demands and bring power to
                          influence decision making agencies.
                        </p>
                      </div>
                    </div>
                  </Col>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header onClick={() => handleAccordionToggle("3")}>
                  <div className="card d-flex flex-row border-0">
                    <Image
                      src="/images/Risk_Pooling.svg"
                      width={60}
                      height={60}
                      alt="Card 2"
                    />
                    <div className="card-body">
                      <h5 className="card-title fs-5">4. Risk Pooling</h5>
                      <p className="card-text p-card-economic fs-5 fw-light">
                        Build mechanisms to reduce risks to income sources and
                        assets. This includes creating social and physical
                        resources to manage risks and mitigating them.
                      </p>
                    </div>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <Col  className=" ">
                    <div className="card d-flex flex-row border-0">
                      <Image
                        src=" /images/Set-up-informal-insurance_mechanisms.svg"
                        width={40}
                        height={40}
                        alt="Card 2"
                      />
                      <div className="card-body">
                        <h5 className="card-title fs-5">
                          Set up informal insurance mechanisms
                        </h5>
                        <p className="card-text p-card-economic fs-5 fw-light">
                          Friendly neighbours, helpful relatives,
                          benefactors/patrons to help when risk hits.
                        </p>
                      </div>
                    </div>
                    <div className="card   d-flex flex-row border-0">
                      <Image
                        src="/images/Set-up-formal-insurance-mechanisms.svg"
                        width={40}
                        height={40}
                        alt="Card 2"
                      />
                      <div className="card-body">
                        <h5 className="card-title fs-5">
                          Set up formal insurance mechanisms
                        </h5>
                        <p className="card-text p-card-economic fs-5 fw-light">
                          To ensure pooling of risks and help in adversity is a
                          right because one is part of the pool.
                        </p>
                      </div>
                    </div>
                  </Col>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default FrameworkAccordion;
