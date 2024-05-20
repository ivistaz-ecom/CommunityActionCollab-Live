'use client'
import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import Link from 'next/link';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HeroBanner() {
  const [rotation, setRotation] = useState(0);

  const sliderRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      mouseWheel(sliderRef.current.innerSlider);
      applyCustomStyles();
    }
  }, []);

  const mouseWheel = (slider) => {
    window.addEventListener('mousewheel', mouseWheelHandler.bind(null, slider));
  };

  const mouseWheelHandler = (slider, event) => {
    event.preventDefault();
    const delta = event.deltaY;
  
  };

  const applyCustomStyles = () => {
    const type = 1; //circle type - 1 whole, 0.5 half, 0.25 quarter
    let radius = '10em'; //distance from center
    const start = 180; //shift start from 0
     // Adjust the radius for smaller screens (e.g., mobile devices)
  if (window.innerWidth <= 768) {
    radius = '5em'; // Adjust the radius value for smaller screens
  }

    const elements = document.querySelectorAll('.round-slider .slider-paging-number li');
    const numberOfElements = type === 1 ? elements.length : elements.length - 1; //adj for even distro of elements when not full circle
    const slice = (360 * type) / numberOfElements;

    elements.forEach((element, i) => {
      const rotate = slice * i + start;
      const rotateReverse = rotate * -1;

      element.style.transform = `rotate(${rotate}deg) translate(${radius}) rotate(${rotateReverse}deg)`;
    });
  };

  if (typeof window !== "undefined") {
  // Call the function on page load
  window.addEventListener('load', applyCustomStyles);

  // Call the function on window resize to handle responsive changes
  window.addEventListener('resize', applyCustomStyles);  
  }



  const rotateImage = () => {
    setRotation(rotation + 26);
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
    fade: true,
    autoplay: true,
    dotsClass: 'slider-paging-number',
    afterChange: rotateImage,
    appendDots: (dots) => (
      <div>
        <ul>{dots}</ul>
      </div>
    ),
  };

  return (
    <>
      <Container>
        <Row>
          <Col lg={4} className="d-flex flex-column justify-content-center">
            <Row className="d-flex flex-column">
              <Col><img src="/images/cac_Logo.svg" width={214} height={50} className='img-fluid' /></Col>
              <Col><p className="fs-5 mt-3 mb-4">…is a dynamic humanitarian emergency platform that builds the resilience of Vulnerable People and their institutions, in their everyday emergencies, and is ready for future humanitarian crises.</p></Col>
              <Col><Link href="/about-us" className='b-banner mb-5'> FIND OUT MORE</Link></Col>
            </Row>
            
            
            
          </Col>
          <Col lg={8} className="spinner">
            <div className="slider round-slider wrapper" ref={sliderRef}>
              <img src="/images/spinner.png" className="w-100" style={{ transform: `rotate(${rotation}deg)`,transition:'.5s' }} />
              <Slider {...settings} ref={sliderRef} className="main-banner slider round-slider">
                {/* Your slides go here */}
              
        <div>
          <img className='herobanner' src="/images/home-22.jpg"/>
          </div>
                  <div>
          <img className='herobanner' src="/images/home-20.jpg"/>
          </div>
                  <div>
          <img className='herobanner' src="/images/home-19.jpg"/>
          </div>
          <div>
          <img className='herobanner'  src="/images/home-18.jpg"/>
          </div>
          <div>
          <img className='herobanner' src="/images/home-17.jpg"/>
          </div>
          <div>
          <img className='herobanner' src="/images/home-16.jpg"/>
          </div>
          <div>
          <img className='herobanner' src="/images/home-15.jpg"/>
          </div>
          <div>
          <img className='herobanner' src="/images/home-14.jpg"/>
                  </div>
                  <div>
          <img className='herobanner' src="/images/home-13.jpg"/>
                  </div>
                  <div>
          <img className='herobanner' src="/images/home-12.jpg"/>
                  </div>
                  <div>
          <img className='herobanner' src="/images/home-11.jpg"/>
                  </div>
                  <div>
          <img className='herobanner' src="/images/home-10.jpg"/>
                  </div>
                  <div>
          <img className='herobanner' src="/images/home-9.jpg"/>
                  </div>
                  <div>
          <img className='herobanner' src="/images/home-8.jpg"/>
                  </div>
                  <div>
          <img className='herobanner' src="/images/home-7.jpg"/>
                  </div>
                  <div>
          <img className='herobanner' src="/images/home-5.jpg"/>
                  </div>
                  <div>
          <img className='herobanner' src="/images/home-3.jpg"/>
                  </div>
                  <div>
          <img className='herobanner' src="/images/home-2.jpg"/>
                  </div>
                  <div>
          <img className='herobanner' src="/images/home-1.jpg"/>
          </div>
        </Slider>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default HeroBanner;