"use client";
import Image from "next/image";
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Link from "next/link";
import CarouselForHeat from "../CarouselForHeat/carousel";
import CarouselForRainy from "../CarouselForRainy/carousel";
import CarouselForWinter from "../CarouselForWinter/carousel";
import CarouselForMonsoon2023 from "../CarouselForMonsoon2023/carousel";
import CarouselForRainReady from "../CarouselForRainReady/carousel";
import CarouselForHeatAdvisory from "../CarouselForHeatAdvisory/carousel";

function Knowledgebase() {
  return (
    <>
      <Container id="base">
        <Row>
          <Col>
            <h1 className="fs-1 pt-4 pb-4 fw-bold">Knowledge Base</h1>
          </Col>
        </Row>
        <Row>
          {/* Heat Carousel */}
          <Col lg={4} sm={6}>
            <CarouselForHeat />
          </Col>

          <Col lg={4} sm={6}>
            <Card className=" border-0 text-center mt-4">
              <Card.Img
                variant="top"
                className="img-know"
                src="/images/heat-advisory.png"
              />
              <Card.Body>
                <Card.Title className="fs-5 fw-light mb-4 main-color">
                  Heat Toon Advisory English 2024
                </Card.Title>
                <Link
                  href="/Heat Toon Advisory English 2024.pdf"
                  target="_blank"
                  className="btn-know"
                >
                  Know More
                </Link>
              </Card.Body>
            </Card>
          </Col>
          {/* Rainy Flyer */}
          <Col lg={4} sm={6}>
            <CarouselForRainy />
          </Col>
          {/* Winter Flyer */}
          <Col lg={4} sm={6}>
            <CarouselForWinter />
          </Col>
          {/* Monsoon */}
          <Col lg={4} sm={6}>
            <CarouselForMonsoon2023 />
          </Col>
          {/* Headt Advisory Carousel */}
          <Col lg={4} sm={6}>
            <CarouselForHeatAdvisory />
          </Col>
          <Col lg={4} sm={6}>
            <Card className=" border-0 text-center mt-4">
              <Card.Img
                variant="top"
                className="img-know"
                src="/images/winter-advisory.png"
              />
              <Card.Body>
                <Card.Title className="fs-5 fw-light mb-4 main-color">
                  Winter Advisory English 2024
                </Card.Title>
                <Link
                  href="/Winter Advisory English 2024.pdf"
                  target="_blank"
                  className="btn-know"
                >
                  Know More
                </Link>
              </Card.Body>
            </Card>
          </Col>
          {/* Be Rain Ready Carousel */}
          <Col lg={4} sm={6}>
            <CarouselForRainReady />
          </Col>

          {/*  */}
          <Col lg={4} sm={6}>
            <Card className="border-0 text-center mt-4">
              <Card.Img
                variant="top"
                className="img-know"
                src="images/climate.png"
              />
              <Card.Body>
                <Card.Title className="fs-5 fw-light mb-4 main-color">
                  Climate Advisory 2023 | Heat wave
                </Card.Title>
                <Link
                  href="/Heatwave-Advisory-Note-Ganesh-A.pdf"
                  target="_blank"
                  className="btn-know"
                >
                  Know More
                </Link>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} sm={6}>
            <Card className="border-0 text-center mt-4">
              <Card.Img
                variant="top"
                className="img-know"
                src="/images/advisory.png"
              />
              <Card.Body>
                <Card.Title className="fs-5 fw-light mb-4 main-color">
                  Climate Advisory 2023 | Cold wave
                </Card.Title>
                <Link
                  href="/Winter-Guide-to-Wellbeing_2023.pdf"
                  target="_blank"
                  className="btn-know"
                >
                  Know More
                </Link>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} sm={6}>
            <Card className="mx-5 border-0 text-center known-card mt-lg-4">
              <Card.Body>
                <Card.Title className="fs-5 fw-light mb-4 main-color">
                  Research Paper | Drivers of vaccine hesitancy among vulnerable
                  populations in India: a cross-sectional multi-state study
                </Card.Title>
                <Link
                  href="https://www.frontiersin.org/articles/10.3389/fpubh.2023.1177634/full?&utm_source=Email_to_authors_&utm_medium=Email&utm_content=T1_11.5e1_author&utm_campaign=Email_publication&field=&journalName=Frontiers_in_Public_Health&id=1177634"
                  target="_blank"
                  className="btn-know"
                >
                  Know More
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} sm={6}>
            <Card className=" border-0 text-center mt-4">
              <Card.Img
                variant="top"
                className="img-know"
                src="/images/knowledge-base-banner.png"
              />
              <Card.Body>
                <Card.Title className="fs-5 fw-light mb-4 main-color">
                  Make Small And Marginal Farmers Resilient 2024
                </Card.Title>
                <Link
                  href="/How to make small and marginal farmers resilient.pdf"
                  target="_blank"
                  className="btn-know"
                >
                  Know More
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* media */}
        <Row>
          <Col>
            <h1 className="fs-1 pt-4 pb-4 fw-bold mt-5" id="media">
              Media
            </h1>
          </Col>
        </Row>
        <Row>
          <Col lg={4} sm={6}>
            <Card className="border-0 text-center known-card">
              <Card.Img
                variant="top"
                className="img-know"
                src="images/media.png"
              />
              <Card.Body>
                <Card.Title className="fs-5 fw-light mb-4 main-color">
                  An initiative to build economic resilience among Odisha’s
                  liguistic minority fishing community
                </Card.Title>
                <Link
                  href="/Heatwave-Advisory-Note-Ganesh-A.pdf"
                  target="_blank"
                  className="btn-know"
                >
                  Know More
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} sm={6}>
            <Card className="border-0 text-center known-card">
              <Card.Img
                variant="top"
                className="img-know"
                src="/images/media1.png"
              />
              <Card.Body>
                <Card.Title className="fs-5 fw-light mb-4 main-color">
                  Mr Shiv Kumar of the Community Action Collaborative talks
                  about the Evolving Social Space
                </Card.Title>
                <Link
                  href="/Winter-Guide-to-Wellbeing_2023.pdf"
                  target="_blank"
                  className="btn-know"
                >
                  Know More
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} sm={6}>
            <Card className="border-0 text-center known-card">
              <Card.Img
                variant="top"
                className="img-know"
                src="/images/media2.png"
              />
              <Card.Body>
                <Card.Title className="fs-5 fw-light mb-4 main-color">
                  How collaborative platforms for non-profit, public & private
                  sectors can lead India through a future humanitarian crisis
                </Card.Title>
                <Link
                  href="https://economictimes.indiatimes.com/news/india/et-community-action-collab/videoshow/96906191.cms"
                  target="_blank"
                  className="btn-know"
                >
                  Know More
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col lg={4} sm={6}>
            <Card className="border-0 text-center known-card">
              <Card.Img
                variant="top"
                className="img-know"
                src="images/media3.png"
              />
              <Card.Body>
                <Card.Title className="fs-5 fw-light mb-4 main-color">
                  Heat stress and vulnerable communities: A call for proactive
                  action
                </Card.Title>
                <Link
                  href="https://www.htsmartcast.com/business-podcasts/ht-smartcast-leadership-lessons/how-can-community-collaboration-solve-problems-of-humanitarian-crisis-in-future/"
                  target="_blank"
                  className="btn-know"
                >
                  Know More
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} sm={6}>
            <Card className="border-0 text-center known-card">
              <Card.Img
                variant="top"
                className="img-know"
                src="/images/media4.png"
              />
              <Card.Body>
                <Card.Title className="fs-5 fw-light mb-4 main-color">
                  COVIDActionCollabs #OnwardTogether Celebrates The Impact and
                  Power of Collaborative Efforts
                </Card.Title>
                <Link
                  href="https://www.aninews.in/news/business/business/covidactioncollabs-onwardtogether-celebrates-the-impact-and-power-of-collaborative-efforts20220912183129/"
                  target="_blank"
                  className="btn-know"
                >
                  Know More
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} sm={6}>
            <Card className="border-0 text-center known-card">
              <Card.Img
                variant="top"
                className="img-know"
                src="/images/media5.png"
              />
              <Card.Body>
                <Card.Title className="fs-5 fw-light mb-4 main-color">
                  Onward Together: A photo exhibition that highlights Covid-19
                  pandemic’s ‘disparities and prejudice’
                </Card.Title>
                <Link
                  href="https://indianexpress.com/article/lifestyle/art-and-culture/onward-together-photo-exhibition-pandemic-disparities-prejudice-marginalised-communities-8126601/"
                  target="_blank"
                  className="btn-know"
                >
                  Know More
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} sm={6}>
            <Card className="border-0 text-center known-card">
              <Card.Img
                variant="top"
                className="img-know"
                src="/images/media6.png"
              />
              <Card.Body>
                <Card.Title className="fs-5 fw-light mb-4 main-color">
                  COVIDActionCollab and USAID Provide Critical COVID-19 Services
                  to 10 Million
                </Card.Title>
                <Link
                  href="https://www.business-standard.com/content/press-releases-ani/covidactioncollab-usaid-provide-critical-covid-19-services-to-10-million-122031101010_1.html"
                  target="_blank"
                  className="btn-know"
                >
                  Know More
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Knowledgebase;
