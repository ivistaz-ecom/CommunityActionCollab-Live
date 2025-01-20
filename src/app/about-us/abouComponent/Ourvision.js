"use client";
import React from "react";
import { Row, Col, Container, Card, Nav } from "react-bootstrap";
import Image from "next/image";
import { Tab, Tabs } from 'react-bootstrap';

function Ourvision() {
  const teamMembers = [
    
    { name: 'Arvind Kumar Pandian', role: 'Project Manager, Strategic Partnerships, USAID', image: './images/arvind_kumar.jpg' },
    { name: 'Deepali Khanna', role: 'Managing Director, Asia Regional Office, The Rockefeller Foundation', image: '/images/deepali.png' },
    { name: 'Madan Padaki', role: 'Entrepreneur, Co-Founder; 1Bridge, Global Alliance for Mass Entrepreneurship (GAME)', image: '/images/madan-1.png' },
    { name: 'N. Raghunathan', role: 'Founder, Catalyst Group', image: '/images/n.rahunathan.png' },
    // { name: 'Naina Subberwal Batra', role: 'Chairperson & CEO at AVPN (Asian Venture Philanthropy Network)', image: '/images/naina.png' },
    { name: 'Prasada Rao', role: 'Former UN SG Special Envoy on AIDS in Asia Pacific and former Health Secretary, Govt. of India', image: '/images/prasada.png' },
    { name: 'Rajeev Sadanandan', role: 'CEO, Health Systems Transformation Platform (HSTP), Former Additional Cheif Secretary, Dept of Health, Govt. of Kerala', image: '/images/rajeev_s.jpg' },
    { name: 'Shiv Kumar', role: 'Founder, Catalyst Group', image: '/images/shiv.png' },
    { name: 'Srinivas Uppaluri', role: 'Leadership Coach, Author, Mentor, Advisor, Former VP & Global Head of Marketing, Infosys ', image: '/images/srinivas.jpeg' },
    { name: 'SS Bhat', role: "CEO, Friends of Women's World Banking (FWWB)", image: '/images/ssbhat.jpg' },
    { name: 'Moutushi Sengupta', role: 'Chief of Capital Mobilization, AVPN; Former Director, India at MacArthur Foundation', image: '/images/motushi.jpg' },
    { name: 'Hari Krishna N', role: 'Senior Advisor - Resilience, Climate Change, Anticipatory Action and HDP Nexus, World Food Programme', image: '/images/hari.jpg' },
    { name: 'Gayathri Vasudevan', role: 'Chairperson, LabourNet Services', image: '/images/gayatri.jpg' },
    { name: 'Dr Neeta Rao', role: 'Senior Health Lead, USAID, India', image: '/images/Dr-Neeta-Rao.jpeg' },
    { name: 'CS Reddy', role: 'Founder and CEO, Mahila Abhivruddhi Society, Andhra Pradesh (APMAS)  and President, Sadhikaratha Foundation', image: '/images/cs-reddy.jpg' },
    // Add more team members as needed
  ];
  return (
    <>
      <Container fluid className="d-flex ">
        <Container>
        <Row className="d-flex flex-column flex-lg-row">
          <Col lg={3} >
            <Container className="sticky-top">
            <h3 className="title-s fs-5">IN THE SECTION</h3>
            <Tab.Container id="vertical-tabs-example" defaultActiveKey="home">
      <Nav variant="fs-4" className="flex-column tab-about">
        <Nav.Item >
          <Nav.Link   className="t-tab fs-6 fw-light" eventKey="home" href="#vision">Our Mission</Nav.Link>
        </Nav.Item>
        <Nav.Item >
          <Nav.Link className="t-tab fs-6 fw-light" eventKey="profile" href="#partners">Our Partners</Nav.Link>
        </Nav.Item>
        <Nav.Item >
          <Nav.Link  className="t-tab fs-6 fw-light" eventKey="contact" href="#governance">Governance</Nav.Link>
        </Nav.Item>
      </Nav>
    </Tab.Container>

            </Container>
          </Col>
          <Col lg={9} sm={12} className="pt-5" id="vision">
            <h2 className="t-vision fs-1 fw-light">Our Vision</h2>
            <p className="p-vision fs-5 fw-light">
            The marginalised and vulnerable population are resilient to disruptions without compromising their long-term wellbeing.
            </p>
            <h2 className="t-vision fs-1 fw-light" id="vistion"> Our Mission </h2>
            <p className="p-vision fs-5 fw-light">
            To support and empower civil society organisations in fostering continuous and harmonised systemic action necessary to build resilient communities.
            </p>
            <div className="row">
  <div className="col-sm-6 col-lg-4 col-xs-12 col-md-6 mt-3">
    <div className="card card_missoin">
      <div className="card-body">
      <Card.Img  variant="top" src="/images/pie-chart.svg" width="40px" height="44px" />
      <Card.Text className="p-card fs-5">
                Synergise resource access and allocate efforts, in an adaptive and urgent manner
                </Card.Text>
      </div>
    </div>
  </div>
  <div className="col-sm-6 col-lg-4 col-xs-12 col-md-6 mt-3">
    <div className="card card_missoin">
      <div className="card-body">
      <Card.Img variant="top" src="/images/Group-115.svg"  width="40px" height="44px"/>
      <Card.Text className="p-card fs-5">
                Augment collaboration and connections, within the larger network, at multiple levels
                </Card.Text>
      </div>
    </div>
  </div>
  <div className="col-sm-6 col-lg-4 col-xs-12 col-md-6 mt-3">
    <div className="card card_missoin">
      <div className="card-body">
      <Card.Img variant="top" src="/images/speedometer.svg" width="40px" height="44px"/>
      <Card.Text className="p-card fs-5">
                Accelerate transformative impact in keeping with the changing needs within vulnerable communities
                </Card.Text>
      </div>
    </div>
  </div>
</div>
            <Container className="pt-4" id="partners">
            <h2 className="t-vision fs-1 fw-light"> Our Partners </h2>
            <p className="p-vision fs-5 fw-light">We believe that resilient communities are better able to prepare, adapt and get stronger in response to internal and external pressures and stresses in a way that not only allows them to maintain essential functions and bounce back quickly but also goes further toward an improved environment, social and economic health and wellbeing.</p>
            <p className="p-vision fs-5 fw-light">This kind of resilience can only be built through constant human collaboration, where looking out for and after each other becomes a way of life.</p>
            <p className="p-vision fs-5 fw-light">Our network of partners ranges from Implementers (NGOs, CBOs, Government bodies and Private Sector Organisations); Providers (Human Resources, Finance and Technology) & Enablers (Policy, Academia and Industry Associations).</p>
            </Container>
            <Container className="pt-4" id="governance">
            <h2 className="t-vision fs-1 fw-light"> Governance </h2>
            <p className="p-vision fs-5 fw-light">A Governing Council of eminent individuals with rich experience from diverse backgrounds and expertise guides and steers the efforts of the collaborative.</p>
            <p className="p-vision fs-5 fw-light">It meets quarterly to help in defining and evolving principles, policies, partnerships, programmes/actions, resourcing and reviewing for the Collaborative; and ensuring that key decision-makers in the government, private, civil society and communities are closely engaged with and their perspective is included for collective action.</p>
            <p className="p-vision fs-5 fw-light">Our Governing Council brings in a wealth of learning from the areas of health, livelihoods, disaster management, food supplies, bureaucracy, academia, technology and donors.</p>
            </Container>
            <Container className="d-flex mt-5  mb-5">
            <Row xs={2} md={2} lg={4} className="g-3">
        {teamMembers.map((member, index) => (
          <Col key={index}>
            <Card className='team-card'>
              <Card.Img className='i-team img-fluid' variant="top" src={member.image} alt={`${member.name} - ${member.role}`} />
              <Card.Body>
                <Card.Title className='n-team fs-5'>{member.name}</Card.Title>
                <Card.Text className='p-role fs-6'>{member.role}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      </Container>
          </Col>
        </Row>
        </Container>
        </Container>
    </>
  );
}

export default Ourvision;
