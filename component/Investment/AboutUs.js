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
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 1,
    fade: false,
    autoplay: false,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: false,
            dots: false
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
              slidesToScroll: 1,
              dots: true
          }
        }
      ]
   
  };

  return (
    <>
            <Container className='text-center py-4' id="about-us">
                <Row className='justify-content-center'>
                <Col lg={9}>
                        <h3 className='fs-2 fw-medium'>About Us</h3>
            <Image src="/investment/code.svg" className="img-fluid" width={100} height={100} />
          <p className='fs-5 fw-light'>In a future overshadowed by pandemics, climate crises, and ongoing uncertainty, vulnerable communities face the greatest challenges. Community Action Collab, a dynamic platform incubated by the Catalyst Group, unites multidisciplinary stakeholders to deliver essential solutions in livelihood, health, social protection, and climate resilience.</p>
          
          <p className='fs-5 fw-light'><span className='fw-normal fst-italic' style={{color:'#3690C0'}}> We foster key high-impact solutions with the potential to scale and impact, while also responding to humanitarian emergencies.</span></p>
                    </Col>
                    </Row>
      </Container>
           

          <Container className='text-center py-4'>
          <Row className='justify-content-center'>
                <Col lg={9}>
          <h3 className='fs-2 fw-medium' style={{color:'#3690C0'}}>Three-Year Goal</h3>
           <p className='fs-5 fw-light'>Invest with us to achieve these tangible goals in three years:</p>
            </Col>
              </Row>
              <Container className='my-3'>
            <div className="" >
              
              <Slider {...settings} >
                {/* Your slides go here */}
               
                     
            
                    <div>
                        <img src="/investment/3.png" className="img-fluid" width={360} height={450}/>
                        <div style={{position:'relative',top:'-125px',background:'#000',padding:'12px',minHeight:'100px',borderBottom:'2px solid #59A9D3',width:'70%'}}>
                            <p className='fs-5 text-white fw-light text-start lh-1'>Establish a responsive, emergency-ready platform for vulnerable districts.</p>
                        </div>
              </div>
              <div>
                        <img src="/investment/1.png" className="img-fluid" width={360} height={450}/>
                        <div style={{position:'relative',top:'-125px',background:'#000',padding:'12px',minHeight:'100px',borderBottom:'2px solid #59A9D3',width:'70%'}} className=''>
                            <p className='fs-5 text-white fw-light text-start lh-1'>Enhance the resilience of 10 million vulnerable individuals.</p>
                        </div>
                      </div>
              <div>
                        <img src="/investment/2.png" className="img-fluid" width={360} height={450}/>
                        <div style={{position:'relative',top:'-125px',background:'#000',padding:'12px',minHeight:'100px',borderBottom:'2px solid #59A9D3',width:'70%'}} >
                            <p className='fs-5 text-white fw-light text-start lh-1'>Strengthen 100 organisations<br/> focused on vulnerable populations.</p>
                        </div>
              </div>
        
        </Slider>
            </div>
            
                
                    
                   
                </Container>

            </Container>
            </>
  );
}

export default AboutUs;