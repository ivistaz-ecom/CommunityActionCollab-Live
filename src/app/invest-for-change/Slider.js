// 'use client'
// import React, { useState, useRef } from 'react';
// import Slider from "react-slick";
// import { FaArrowRight } from "react-icons/fa";
// import { FaArrowLeft } from "react-icons/fa";
// import { Container, Row, Col } from 'react-bootstrap';
// import Image from 'next/image';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const MyComponent = () => {
//     const [fundTab, setFundTab] = useState(true);
//     const [initiativeTab, setInitiativeTab] = useState(false);
//     const [communityTab, setCommunityTab] = useState(false);
//     const [geoTab, setGeoTab] = useState(false);
//     const [partnerTab, setpartnerTab] = useState(false);
//   const sliderRef = useRef();

// //   const communities = [
// //       { name: 'The Syndicated Fund', value: 'pillsFundTab', toggleFunction: () => setFundTab(!fundTab)  },
// //       { name: 'Specific Initiatives to Support', value: 'pillsInitiativeTab', toggleFunction: () => setInitiativeTab(!initiativeTab) },
// //       { name: 'Specific Communities to Support', value: 'pillsCommunityTab', toggleFunction: () => setCommunityTab(!communityTab) },
// //       { name: 'Specific Geographies to Support', value: 'pillsGeoTab', toggleFunction: () => setGeoTab(!geoTab) },
// //       { name: 'Specific Partners to Support', value: 'pillsPartnerTab', toggleFunction: () => setpartnerTab(!partnerTab) },
      
    
//     //   ];
    
//     const communities = [
//         { name: 'The Syndicated Fund', value: 'pillsFundTab', toggleFunction: () => handleTabToggle('pillsFundTab') },
//         { name: 'Specific Initiatives to Support', value: 'pillsInitiativeTab', toggleFunction: () => handleTabToggle('pillsInitiativeTab') },
//         { name: 'Specific Communities to Support', value: 'pillsCommunityTab', toggleFunction: () => handleTabToggle('pillsCommunityTab') },
//         { name: 'Specific Geographies to Support', value: 'pillsGeoTab', toggleFunction: () => handleTabToggle('pillsGeoTab') },
//         { name: 'Specific Partners to Support', value: 'pillsPartnerTab', toggleFunction: () => handleTabToggle('pillsPartnerTab') },
//     ];
    
//     const handleTabToggle = (tabValue) => {
//         setFundTab(tabValue === 'pillsFundTab');
//         setInitiativeTab(tabValue === 'pillsInitiativeTab');
//         setCommunityTab(tabValue === 'pillsCommunityTab');
//         setGeoTab(tabValue === 'pillsGeoTab');
//         setpartnerTab(tabValue === 'pillsPartnerTab');
//       };
    
//   const CustomNextArrow = (props) => {
//     const { onClick } = props;
//     return (
//         <FaArrowRight size={35} className="invest-arrow invest-next-arrow" onClick={onClick}/>
//     );
//   };
  
//   const CustomPrevArrow = (props) => {
//     const { onClick } = props;
//       return (
//         <FaArrowLeft size={35} onClick={onClick} className="invest-arrow invest-prev-arrow"/>
      
//     );
//   };

//   var settings = {
//     dots: false,
//     infinite: false,
//     speed: 1000,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//       initialSlide: 1,
//       nextArrow: <CustomNextArrow />,
//       prevArrow: <CustomPrevArrow />,
//       fade: false,
//       arrows:true,
//       autoplay: false,
//       responsive: [
//         {
//           breakpoint: 1024,
//           settings: {
//             slidesToShow: 3,
//             slidesToScroll: 3,
//             infinite: true,
//             dots: true
//           }
//         },
//         {
//           breakpoint: 600,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             initialSlide: 1
//           }
//         },
//         {
//           breakpoint: 480,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1
//           }
//         }
//       ]
//   };
    


//     return (
//       <>
//     <Container className='mt-5' id="opportunities">
//       <Slider {...settings} ref={sliderRef}>
//         {communities.map((community, index) => (
//           <div key={index} className='mt-5'>
//             <button onClick={community.toggleFunction} className='btn-tab'>{community.name}
//                 </button>
               
//             {/* Additional content for the specific community */}
//           </div>
//         ))}
//         {/* Your slides go here */}
//           </Slider>
//       </Container>
//       <Container className='tab-cont mt-5'>
              
//                 {fundTab && <Container>
//                     <Row className='mb-4'>
//                         <Col lg={1}><Image src="/images/sydicate.svg" width={80} height={80} /></Col>
//                         <Col lg={11}><h2 className='fs-1'>The Syndicated Fund</h2></Col></Row>
//                     <p className='fs-5'>A variety of investors and contributors with goals similar to ours are grouped together via the Syndicated Fund in establishing, shaping and optimising the fund.</p>
//                     <p className='fs-5'>The Syndicated Fund supports initiatives that address the needs of vulnerable populations via relief, recovery and resilience-building, serving 10 million people. These programmes are tested, technically validated, and evidence-driven, and are focused on the needs of vulnerable communities.</p>
//                 </Container>}
//           {initiativeTab && <div><Container>
//                     <Row className='mb-4'>
//                         <Col lg={1}><Image src="/images/initiative.svg" width={80} height={80} /></Col>
//                         <Col lg={11}><h2 className='fs-1'>Specific Initiatives to Support</h2></Col></Row>
//                     <p className='fs-5'>The menu of 13 initiatives categorised include initiatives on protecting and caring for people, building resilient systems and future-proofing against humanitarian crises.</p>
//                     <ul className='fs-5'>
//                         <li>#VaxNow: A Campaign to Reach the Unreached & Vaccinate 50M Vulnerable Populations</li>
//                         <li>Integrated Primary Healthcare including COVID-19 Prevention and Care</li>
//                         <li>Living Equipment</li>
//                         <li>Pandemic Plastic – Dealing With Dead-End Plastics</li>
//                         <li>Guidance to Media</li>
//                         <li>Scalable Models for Economic Resilience of Vulnerable Populations</li>
//                         <li>Social Protection Help Desks</li>
//                         <li>Street Vendors Wellbeing & Resilience</li>
//                         <li>Regenerative Agriculture</li>
//                         <li>Precision Pandemic Surveillance</li>
//                         <li>District Health Stack</li>
//                         <li>Green Health Alliance</li>
//                         <li>CAC Secretariat</li>
//                     </ul>
//                 </Container></div>}
//           {communityTab && <div><Container>
//                     <Row className='mb-4'>
//                         <Col lg={1}><Image src="/images/communities.svg" width={80} height={80} /></Col>
//                         <Col lg={11}><h2 className='fs-1'>Specific Communities to Support</h2></Col></Row>
//                     <p className='fs-5'>We understand that, as investors, you may be interested in supporting specific communities. You may be moved by learning that humanitarian crises are disproportionately affecting a particular group, towards whom you then seek to extend your support. Through our large and diverse partner base, we are able to reach several vulnerable communities.</p>
//                     <Row><Col>
//                     <ul className='fs-5 list-unstyled'>
//                         <li style={{paddingBottom:'8px'}}><Image src="/images/1.png" width={50} height={50} style={{marginRight:'12px'}}/> Factory Unorganised Workers</li>
//                         <li style={{paddingBottom:'8px'}}> <Image src="/images/2.png" width={50} height={50} style={{marginRight:'12px'}}/>Gay Men & Transgenders</li>
//                         <li style={{paddingBottom:'8px'}}> <Image src="/images/3.png" width={50} height={50} style={{marginRight:'12px'}}/>Health Workers</li>
//                         <li style={{paddingBottom:'8px'}}> <Image src="/images/4.png" width={50} height={50} style={{marginRight:'12px'}}/>Person with Disabilities</li>
//                         <li style={{paddingBottom:'8px'}}> <Image src="/images/5.png" width={50} height={50} style={{marginRight:'12px'}}/>Sex Workers</li>
//                         <li style={{paddingBottom:'8px'}}> <Image src="/images/6.png" width={50} height={50} style={{marginRight:'12px'}}/>Small Farmers</li>
//                         <li> <Image src="/images/7.png" width={50} height={50} style={{marginRight:'12px'}}/>Street Children</li>
//                     </ul>
//                     </Col><Col>
//                     <ul className='fs-5 list-unstyled'>
//                                 <li style={{paddingBottom:'8px'}}><Image src="/images/1.png" width={50} height={50} style={{marginRight:'12px'}}/> Street Vendors</li>
//                         <li style={{paddingBottom:'8px'}}> <Image src="/images/2.png" width={50} height={50} style={{marginRight:'12px'}}/> Victims of GBV and Child Abuse</li>
//                         <li style={{paddingBottom:'8px'}}> <Image src="/images/3.png" width={50} height={50} style={{marginRight:'12px'}}/> Vulnerable Women</li>
//                         <li style={{paddingBottom:'8px'}}> <Image src="/images/4.png" width={50} height={50} style={{marginRight:'12px'}}/> In and Out of School Children</li>
//                         <li style={{paddingBottom:'8px'}}> <Image src="/images/5.png" width={50} height={50} style={{marginRight:'12px'}}/> Domestic Helpers</li>
//                         <li style={{paddingBottom:'8px'}}> <Image src="/images/6.png" width={50} height={50} style={{marginRight:'12px'}}/> People in Homeless Shelters</li>
//                         <li> <Image src="/images/7.png" width={50} height={50} style={{marginRight:'12px'}}/> Migrants</li>
//                     </ul>
//                         </Col></Row>
//                 </Container></div>}
//           {geoTab && <div><Container>
//                     <Row className='mb-4'>
//                         <Col lg={1}><Image src="/images/geo.svg" width={80} height={80} /></Col>
//                         <Col lg={11}><h2 className='fs-1'>Specific Geographies to Support</h2></Col></Row>
//                     <p className='fs-5'>As an investor, you may want to work with or benefit people living in specific affected geographies. CAC partners, being spread across 36 Indian States and Union Territories, have their pulse on the ground situation, needs, opportunities and challenges. We can modulate our offerings to suit the intended geography.</p>
//                 </Container></div>}
//           {partnerTab&& <div><Container>
//                     <Row className='mb-4'>
//                         <Col lg={1}><Image src="/images/partners.svg" width={80} height={80} /></Col>
//                         <Col lg={11}><h2 className='fs-1'>Specific Partners to Support</h2></Col></Row>
//                     <p className='fs-5'>As an investor, you may want to identify specific organisations that you would like to fund because of existing relationships, their cause, or the work that they do. Given our reach of 360+ partners, of which 227 are implementing organisations, you have a wide range of partners to choose from.</p>
                    
//                 </Container></div>}
//       </Container></>
//   );
// };

// export default MyComponent;




'use client'
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MyComponent = () => {
    const [activeTab, setActiveTab] = useState('pillsFundTab');

    const communities = [
        { name: 'The Syndicated Fund', value: 'pillsFundTab' },
        { name: 'Specific Initiatives to Support', value: 'pillsInitiativeTab' },
        { name: 'Specific Communities to Support', value: 'pillsCommunityTab' },
        { name: 'Specific Geographies to Support', value: 'pillsGeoTab' },
        { name: 'Specific Partners to Support', value: 'pillsPartnerTab' },
    ];

    const handleTabToggle = (tabValue) => {
        setActiveTab(tabValue);
    };

    return (
        <Container className='mt-5' id="opportunities">
            <div className="d-lg-flex justify-content-between flex-wrap w-100">
                {communities.map((community, index) => (
                    <button 
                        key={index} 
                        onClick={() => handleTabToggle(community.value)} 
                        className={`btn-tab ${activeTab === community.value ? 'active' : ''}`}
                    >
                        {community.name}
                    </button>
                ))}
            </div>
            <Container className='tab-cont mt-5'>
                {activeTab === 'pillsFundTab' && (
                    <Container>
                        <Row className='mb-4'>
                            <Col lg={1}><Image src="/images/sydicate.svg" width={80} height={80} /></Col>
                            <Col lg={11}><h2 className='fs-1'>The Syndicated Fund</h2></Col>
                        </Row>
                        <p className='fs-5'>A variety of investors and contributors with goals similar to ours are grouped together via the Syndicated Fund in establishing, shaping and optimising the fund.</p>
                        <p className='fs-5'>The Syndicated Fund supports initiatives that address the needs of vulnerable populations via relief, recovery and resilience-building, serving 10 million people. These programmes are tested, technically validated, and evidence-driven, and are focused on the needs of vulnerable communities.</p>
                    </Container>
                )}
                {activeTab === 'pillsInitiativeTab' && (
                    <Container>
                        <Row className='mb-4'>
                            <Col lg={1}><Image src="/images/initiative.svg" width={80} height={80} /></Col>
                            <Col lg={11}><h2 className='fs-1'>Specific Initiatives to Support</h2></Col>
                        </Row>
                        <p className='fs-5'>The menu of 13 initiatives categorised include initiatives on protecting and caring for people, building resilient systems and future-proofing against humanitarian crises.</p>
                        <ul className='fs-5'>
                            <li>#VaxNow: A Campaign to Reach the Unreached & Vaccinate 50M Vulnerable Populations</li>
                            <li>Integrated Primary Healthcare including COVID-19 Prevention and Care</li>
                            <li>Living Equipment</li>
                            <li>Pandemic Plastic – Dealing With Dead-End Plastics</li>
                            <li>Guidance to Media</li>
                            <li>Scalable Models for Economic Resilience of Vulnerable Populations</li>
                            <li>Social Protection Help Desks</li>
                            <li>Street Vendors Wellbeing & Resilience</li>
                            <li>Regenerative Agriculture</li>
                            <li>Precision Pandemic Surveillance</li>
                            <li>District Health Stack</li>
                            <li>Green Health Alliance</li>
                            <li>CAC Secretariat</li>
                        </ul>
                    </Container>
                )}
                {activeTab === 'pillsCommunityTab' && (
                    <Container>
                        <Row className='mb-4'>
                            <Col lg={1}><Image src="/images/communities.svg" width={80} height={80} /></Col>
                            <Col lg={11}><h2 className='fs-1'>Specific Communities to Support</h2></Col>
                        </Row>
                        <p className='fs-5'>We understand that, as investors, you may be interested in supporting specific communities. You may be moved by learning that humanitarian crises are disproportionately affecting a particular group, towards whom you then seek to extend your support. Through our large and diverse partner base, we are able to reach several vulnerable communities.</p>
                        <Row>
                            <Col>
                                <ul className='fs-5 list-unstyled'>
                                    <li style={{paddingBottom:'8px'}}><Image src="/images/1.png" width={50} height={50} style={{marginRight:'12px'}}/> Factory Unorganised Workers</li>
                                    <li style={{paddingBottom:'8px'}}> <Image src="/images/2.png" width={50} height={50} style={{marginRight:'12px'}}/>Gay Men & Transgenders</li>
                                    <li style={{paddingBottom:'8px'}}> <Image src="/images/3.png" width={50} height={50} style={{marginRight:'12px'}}/>Health Workers</li>
                                    <li style={{paddingBottom:'8px'}}> <Image src="/images/4.png" width={50} height={50} style={{marginRight:'12px'}}/>Person with Disabilities</li>
                                    <li style={{paddingBottom:'8px'}}> <Image src="/images/5.png" width={50} height={50} style={{marginRight:'12px'}}/>Sex Workers</li>
                                    <li style={{paddingBottom:'8px'}}> <Image src="/images/6.png" width={50} height={50} style={{marginRight:'12px'}}/>Small Farmers</li>
                                    <li> <Image src="/images/7.png" width={50} height={50} style={{marginRight:'12px'}}/>Street Children</li>
                                </ul>
                            </Col>
                            <Col>
                                <ul className='fs-5 list-unstyled'>
                                    <li style={{paddingBottom:'8px'}}><Image src="/images/1.png" width={50} height={50} style={{marginRight:'12px'}}/> Street Vendors</li>
                                    <li style={{paddingBottom:'8px'}}> <Image src="/images/2.png" width={50} height={50} style={{marginRight:'12px'}}/> Victims of GBV and Child Abuse</li>
                                    <li style={{paddingBottom:'8px'}}> <Image src="/images/3.png" width={50} height={50} style={{marginRight:'12px'}}/> Vulnerable Women</li>
                                    <li style={{paddingBottom:'8px'}}> <Image src="/images/4.png" width={50} height={50} style={{marginRight:'12px'}}/> In and Out of School Children</li>
                                    <li style={{paddingBottom:'8px'}}> <Image src="/images/5.png" width={50} height={50} style={{marginRight:'12px'}}/> Domestic Helpers</li>
                                    <li style={{paddingBottom:'8px'}}> <Image src="/images/6.png" width={50} height={50} style={{marginRight:'12px'}}/> People in Homeless Shelters</li>
                                    <li> <Image src="/images/7.png" width={50} height={50} style={{marginRight:'12px'}}/> Migrants</li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                )}
                {activeTab === 'pillsGeoTab' && (
                    <Container>
                        <Row className='mb-4'>
                            <Col lg={1}><Image src="/images/geo.svg" width={80} height={80} /></Col>
                            <Col lg={11}><h2 className='fs-1'>Specific Geographies to Support</h2></Col>
                        </Row>
                        <p className='fs-5'>As an investor, you may want to work with or benefit people living in specific affected geographies. CAC partners, being spread across 36 Indian States and Union Territories, have their pulse on the ground situation, needs, opportunities and challenges. We can modulate our offerings to suit the intended geography.</p>
                    </Container>
                )}
                {activeTab === 'pillsPartnerTab' && (
                    <Container>
                        <Row className='mb-4'>
                            <Col lg={1}><Image src="/images/partners.svg" width={80} height={80} /></Col>
                            <Col lg={11}><h2 className='fs-1'>Specific Partners to Support</h2></Col>
                        </Row>
                        <p className='fs-5'>As an investor, you may want to identify specific organisations that you would like to fund because of existing relationships, their cause, or the work that they do. Given our reach of 360+ partners, of which 227 are implementing organisations, you have a wide range of partners to choose from.</p>
                    </Container>
                )}
            </Container>
        </Container>
    );
};

export default MyComponent;





