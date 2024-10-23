import { Carousel, Card } from "react-bootstrap";
import Link from 'next/link';
import React from 'react';
import './MyCarousel.css'; // Add this CSS file for custom styles
import { monsoon2023} from "../../../../utils/data"; // Assuming heatflyer is an array of objects

const MyCarousel = () => {
  return (
    <>
      <Carousel 
        indicators={false} 
        nextIcon={<span aria-hidden="true" className="carousel-control-next-icon custom-arrow" />} 
        prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon custom-arrow" />}
      >
        {monsoon2023.map((item, index) => (
          <Carousel.Item key={index}>
            <Card className="border-0 text-center   ">
              <Card.Img
                variant="top"
                className="img-know"
                src={item.thumbnail}
              />
              <Card.Body>
                <Card.Title className="fs-5 fw-light mb-4 main-color">
                  {item.title}
                </Card.Title>
                <Link href={item.pdflink} passHref  className="btn-know" target="_blank">
                 Know More
                </Link>
              </Card.Body>
            </Card>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}

export default MyCarousel;
