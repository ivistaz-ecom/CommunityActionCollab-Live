"use client";
import Image from "next/image";
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Link from "next/link";
import MyCarousel from "../CarouselForHeat/carousel";
import { media, slider } from "../../../../utils/data";

function Knowledgebase() {
  return (
    <>
      <Container id="base">
        <Row>
          <Col>
            <h1 className="fs-1 pt-4 pb-4 fw-bold">Knowledge Base</h1>
          </Col>
        </Row>

        {/* Carousel Sections */}
        <Row>
          {Object.keys(slider).map((categoryKey) => (
            <Col key={categoryKey} lg={4} sm={6}>
              {/* Pass the sub-data to the MyCarousel component */}
              <MyCarousel data={slider[categoryKey]} />
            </Col>
          ))}
        </Row>

        {/* Media Section */}
        <Row>
          <Col>
            <h1 className="fs-1 pt-4 pb-4 fw-bold mt-5" id="media">
              Media
            </h1>
          </Col>
        </Row>
        <Row>
          {/* Map through media items and render each in its own Col */}
          {media.map((item, index) => (
            <Col key={index} lg={4} sm={6}>
              <Card className="border-0 text-center known-card my-3">
                <Card.Img
                  variant="top"
                  className="img-know"
                  src={item.imageSrc}
                />
                <Card.Body>
                  <Card.Title className="fs-5 fw-light mb-4 main-color">
                    {item.title}
                  </Card.Title>
                  <Link href={item.link} target="_blank" className="btn-know">
                    Know More
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Knowledgebase;
