'use client'
import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import Link from 'next/link';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import configData from "../../config.json";
import Image from 'next/image'
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
function HeroBanner() {
  const [data, setdata] = useState([]);

  const sliderRef = useRef(null);

    const postFetch = async () => {
        const perPage = 10; // Number of posts per page
        let url = `${configData.SERVER_URL}posts?_embed&categories[]=57&production[]=58&per_page=${perPage}`;
        const response = await fetch(url);
        const newData = await response.json();
        console.log(newData)
        setdata(newData)
    }
    useEffect(() => {
        postFetch();
    }, [])
    
    const CustomNextArrow = (props) => {
        const { onClick } = props;
        return (
            <FaArrowRight size={35} className="custom-arrow next-arrow" onClick={onClick}/>
        );
      };
      
      const CustomPrevArrow = (props) => {
        const { onClick } = props;
          return (
            <FaArrowLeft size={35} onClick={onClick} className="custom-arrow prev-arrow"/>
          
        );
      };

  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
      initialSlide: 1,
      nextArrow: <CustomNextArrow />,
      prevArrow: <CustomPrevArrow />,
      fade: false,
      arrows:true,
      autoplay: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };

  return (
    <>
 <Container>
              <h1 className='t-action fs-1 fw-light mt-5 mb-5'>Stories Of Impact</h1>   
              
            <Slider {...settings} ref={sliderRef} >
               
            
                  
                      
                      {
                          data.map((posts, index) => (
                            <div className="home-main">
                            <div class="card home-post" >
                            <div class="row g-0">
                              <div class="col-md-6">
                                          <Image src={posts['_embedded']['wp:featuredmedia'][0]['source_url']} class="w-100 home-image" width={100} height={100} />
                              </div>
                              <div class="col-md-6">
                                <div class="card-body">
                                      <Link href={`/${posts['slug']}`} className="text-decoration-none text-black"><h5 class="card-title fs-6" dangerouslySetInnerHTML={{ __html: posts['title']['rendered'] }}/></Link> 
                                </div>
                              </div>
                            </div>
                                  </div>
                                  </div> 
                                  
                          ))

}



                  {/* Your slides go here */}
                  </Slider> 

      </Container>
        
      
    </>
  );
}

export default HeroBanner;