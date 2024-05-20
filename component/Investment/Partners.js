'use client'
import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import Link from 'next/link';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image'

function AboutUs() {

    var settings = {
    speed: 400,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 1,
    fade: false,
    autoplay: false,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 6,
            infinite: false,
            dots: false
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
              slidesToScroll: 2,
              dots: true
          }
        }
      ]
   
  };

  return (
    <>

          

          <Container className='text-center py-4'>

              <Container className='my-3'>
            <div className="" >
              
              <Slider {...settings} >
                {/* Your slides go here */}
                        <div><Image src="/investment/swasti.png" className="img-fluid" width={250} height={150}/></div>
                          <div><Image src="/investment/vruti.png" className="img-fluid" width={250} height={150}/></div>
                          <div><Image src="/investment/gf.png" className="img-fluid" width={250} height={150} /></div>
                          <div><Image src="/investment/fuzhio.png" className="img-fluid" width={250} height={150} /></div>
                          <div><Image src="/investment/upfront.svg" className="img-fluid" width={250} height={150} /></div>
                          <div><Image src="/investment/cms.png" className="img-fluid" width={250} height={150}/></div>
        
        </Slider>
            </div>
            
                
                    
                   
                </Container>

            </Container>
            </>
  );
}

export default AboutUs;