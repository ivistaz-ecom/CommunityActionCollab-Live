import React, { forwardRef } from 'react'
import { Image } from 'react-bootstrap'

const SolutionScale = forwardRef((props, ref) => {
    return (
        <>
            <style>
                {
                    `
                .text-dblue {
                    color: #2A7A99;
                }
                `
                }
            </style>
            <div className='container p-4' ref={ref}>
                <div className='d-flex flex-column gap-3 flex-column justify-content-center'>
                    <div className='text-center'>
                        <Image src="/emailer/dec-2024/solution_to_scale.png" alt='' className='w-100 z-0 position-relative' />
                        <div className='bg-yellow text-center p-4 mx-3 z-3 position-relative' style={{ marginTop: "-65px" }}>
                            <h3>
                                SOLUTIONS TO SCALE
                            </h3>
                            <h4 className='text-dblue'>
                                Street Vendors Wellbeing & Resilience
                            </h4>
                        </div>
                    </div>

                    <div className='text-start '>
                        <p>
                            Our solution for the resilience of street vendors, especially women, prioritises their well-being and empowerment, covering improved health, safety, security, social protection, voice, and agency.
                        </p>
                    </div>

                    <div
                        className="d-flex flex-column p-4"
                        style={{
                            backgroundImage: `url('/emailer/dec-2024/solution_focus_bg.svg')`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            height: "auto",
                            width: "100%",
                        }}
                    >
                        <h4 className='fw-bold '>
                            This Solution Focuses On:
                        </h4>
                        <div className='mt-3'>
                            <p className='dot-em'>Capacity building and awareness on rights and entitlements.</p>
                            <p className='dot-em'>Improving access to social protection, primary health, and financial services.</p>
                            <p className='dot-em'>Utilising on-site locations as learning sites for demonstrating comprehensive interventions.</p>
                            <p className='dot-em'>Enhancing the voice and agency of the community.</p>
                        </div>
                    </div>

                    <div>
                        <p>
                            The intervention has provided services to more than 30,000 street vendors in Maharashtra, Delhi, Odisha, Telangana, West Bengal, Haryana, and Andhra Pradesh.
                        </p>
                        <p>We now seek funding to scale the initiative to reach more street vendor communities. Our goal is to reach 1,75,000 street vendors nationwide by the year 2024-25, fostering impactful change.</p>
                    </div>

                    <div className='d-flex flex-column justify-content-center align-items-center mb-3'>
                        <a href='https://docs.google.com/document/u/0/d/1CmP-FfzEWbEtPdAwStArSyl_nzcOj2byaaKpbmzWuAg/edit' target='_blank'>
                            <p className='bg-sblue p-2 rounded-4 d-inline-block px-4 text-black'>
                                More opportunities to invest
                            </p>
                        </a>
                    </div>

                    <div className='border-1' style={{ border: "1px dashed black" }}>
                    </div>
                </div>
            </div>
        </>
    )
});
export default SolutionScale
