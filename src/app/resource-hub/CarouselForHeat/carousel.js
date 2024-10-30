import { Carousel, Card } from 'react-bootstrap';
import Link from 'next/link';
import React from 'react';
import Modal from "../../../../utils/Modal";

const MyCarousel = ({ data }) => {
  return (
    <>
      {data.length === 1 ? (
        // Render a single card without carousel if there's only one item
        <Card className="border-0 text-center mt-4">
          <Card.Img variant="top" className="img-know border" src={data[0].thumbnail} />
          <Card.Body>
            <Card.Title className="fs-5 fw-light mb-4 main-color">{data[0].title}</Card.Title>
          </Card.Body>
        </Card>
      ) : (
        // Render carousel if there are multiple items
        <Carousel indicators={false}>
          {data.map((item) => (
            <Carousel.Item key={item.id}>
              <Card className="border-0 text-center mt-4">
                <Card.Img variant="top" className="img-know border" src={item.thumbnail} />
                <Card.Body>
                  <Card.Title className="fs-5 fw-light mb-4 main-color">{item.title}</Card.Title>
                </Card.Body>
              </Card>
            </Carousel.Item>
          ))}
        </Carousel>
      )}
      <Modal data={data} />
    </>
  );
};

export default MyCarousel;
