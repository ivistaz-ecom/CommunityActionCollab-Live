'use client'
import React, { useRef } from 'react'
import { Image } from 'react-bootstrap'
import Highlights from './Highlights';
import GreenHealthAlliance from './GreenHealthAlliance';
import SocialProtectionProject from './SocialProtectionProject';
import ImpactMakers from './ImpactMakers';
import CacMember from './CacMember';
import SolutionScale from './SolutionScale';
import CacDigitalCampaigns from './CacDigitalCampaigns';
import DecFooter from './DecFooter';
import LearningEvents from './LearningEvents';

const DecBanner = () => {
    const highlightsRef = useRef(null);
    const spotlightRef = useRef(null);
    const scaleRef = useRef(null);
    const eventsRef = useRef(null);
    const campaignsRef = useRef(null);

    const scrollToSection = (ref) => {
        if (ref.current) {
            console.log('Scrolling to:', ref.current);  // Debug log
            ref.current.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.log('Ref not found');
        }
    };

    return (
        <>
            <style>
                {
                    `
                        .dot-em::before {
                                content: '•'; /* Unicode for the dot */
                                margin-right: 8px; /* Adjust spacing */
                                color: #297B99; /* Dot color */
                                font-size: 1.2rem; /* Adjust size if needed */
                            }
                        .bg-yellow {
                            background: #FDE579;
                        }

                        .bg-sblue {
                            background: #C7F0E4;
                        }
                        
                        p {
                            font-size: 20px
                        }
                        .bg-dblue {
                            background: #2A7A99;
                        }
                        .circle-b {
                            border-radius: 50px;
                            height: 100px;
                            width: 100px;
                            display: flex;
                            flex-direction: column;
                            align-content: center;
                            justify-content: center;
                            align-items: center;

                        }

                        .text-sblue {
                            color: #C7F0E4;
                        }

                        text-dblue {
                            color: #297A99 !important;
                        }

                        .bg-gray {
                        background: #E9E8E8;
                        }

                        .cursor-pointer {
                            cursor: pointer;
                        }

                        @media(max-width:767px) {
                            img {
                                width: 100%;
                            }
                        }
                    `
                }
            </style>

            {/* Banner Image */}
            <div className='container p-0 d-flex flex-column justify-content-center align-items-center gap-5 p-4'
                style={{
                    backgroundImage: `url('/emailer/dec-2024/header-bg.svg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "100vh",
                    width: "100%",
                }}
            >
                {/* <Image src='/emailer/dec-2024/header-bg.svg' alt='banner' className='w-100' /> */}
                <Image src='/emailer/dec-2024/logo.svg' alt='banner' className='' />
                <h1 className='text-dblue'>#CommunityActionCollab Newsletter | December, 2024</h1>
            </div>

            {/* section 2 */}
            <div className='container bg-yellow p-5'>
                <div className='d-flex flex-lg-row flex-column gap-lg-4 gap-3 flex-wrap'>
                    <div className='d-flex flex-row gap-3 justify-content-lg-center align-items-lg-center cursor-pointer'
                        onClick={() => scrollToSection(highlightsRef)}
                    >
                        <div className='d-flex flex-row gap-3 justify-content-center align-items-center'>
                            <div>
                                <h5 className='mb-0 dot-em '>Highlights</h5>
                            </div>
                            <div>
                                <i class="bi bi-arrow-right text-black"></i>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex flex-row gap-3 justify-content-lg-center align-items-lg-center cursor-pointer'
                        onClick={() => scrollToSection(spotlightRef)}
                    >
                        <div>
                            <h5 className='mb-0 dot-em'>CAC Member Spotlight</h5>
                        </div>
                        <div>
                            <i class="bi bi-arrow-right text-black"></i>
                        </div>
                    </div>
                    <div className='d-flex flex-row gap-3 justify-content-lg-center align-items-lg-center cursor-pointer'
                        onClick={() => scrollToSection(scaleRef)}>
                        <div>
                            <h5 className='mb-0 dot-em'>Solutions to Scale</h5>
                        </div>
                        <div>
                            <i class="bi bi-arrow-right text-black"></i>
                        </div>
                    </div>
                    <div className='d-flex flex-row gap-3 justify-content-lg-center align-items-lg-center cursor-pointer'
                        onClick={() => scrollToSection(eventsRef)}>
                        <div>
                            <h5 className='mb-0 dot-em'>Learning Events</h5>
                        </div>
                        <div>
                            <i class="bi bi-arrow-right text-black"></i>
                        </div>
                    </div>
                    <div className='d-flex flex-row gap-3 justify-content-lg-center align-items-lg-center cursor-pointer'
                        onClick={() => scrollToSection(campaignsRef)}>
                        <div>
                            <h5 className='mb-0 dot-em'>CAC Digital Campaigns</h5>
                        </div>
                        <div>
                            <i class="bi bi-arrow-right text-black"></i>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container bg-sblue p-0'>
                <Image src='/emailer/dec-2024/inside_title.svg' alt='banner' className='' />
            </div>
            <div className='container bg-sblue p-lg-5 p-4'>
                <div className='d-flex flex-column gap-4'>
                    <div>
                        <h4 className='fw-bold'>Dear CAC member,</h4>
                        <p>
                            At Community Action Collab, we believe that collaboration is central to driving systemic change. Through the power of coalitions, we can achieve shared goals, improve the well-being of vulnerable populations, and enhance their ability to withstand, recover, and bounce forward from crises. By hosting coalitions focused on health, livelihood, social protection, and climate adaptation, CAC brings together diverse partners to tackle complex challenges and create lasting impact. In the upcoming days, you will hear more from us about the coalitions hosted under CAC.
                        </p>
                    </div>
                    <div>
                        <h4 className='fw-bold'>Why Coalitions Matter</h4>
                        <p>
                            By uniting stakeholders—including governments, NGOs, private sector entities, academia, and community groups—coalitions amplify their collective strengths and identify scalable solutions that address systemic issues at their root. For example, SETU —the Social Protection Coalition under CAC unites diverse stakeholders to strengthen social protection coverage for vulnerable populations, discovering and promoting scalable, sustainable interventions to ensure no one is left behind.
                        </p>
                    </div>
                    <div>
                        <h4 className='fw-bold'>Power of Collaboration</h4>
                        <p>
                            Coalition building comes with hurdles such as navigating complex networks, managing competition, and addressing power imbalances. CAC supports coalitions hosted under it by promoting transparent communication, inclusive decision-making, and a commitment to shared responsibilities.
                        </p>

                        <p>
                            At CAC, we are inspired by the collective impact coalitions can achieve. Coalitions are more than tools for change—they are a shared responsibility and a source of inspiration. Together, we can amplify our efforts, influence policy, and build the resilience of vulnerable populations for a more equitable and sustainable future.
                        </p>
                    </div>
                </div>
            </div>

            <Highlights ref={highlightsRef} />
            <GreenHealthAlliance />
            <SocialProtectionProject />
            <ImpactMakers />
            <CacMember ref={spotlightRef} />
            <SolutionScale ref={scaleRef} />
            <LearningEvents ref={eventsRef} />
            <CacDigitalCampaigns ref={campaignsRef} />
            <DecFooter />
        </>
    )
}

export default DecBanner
