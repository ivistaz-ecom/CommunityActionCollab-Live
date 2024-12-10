import React from 'react'
import { Image } from 'react-bootstrap'

const ImpactMakers = () => {
    return (
        <>
            <div className='container py-4 p-0'>
                <div className='d-flex flex-column gap-3 flex-column justify-content-center bg-sblue p-lg-5 p-4'>
                    <div className='d-flex flex-row justify-content-center '>
                        <h3 className='mb-0 fw-bolder'>
                            UNFCCC Impact Makers: Recognizing the Impact of PATCH in Addressing Climate and Health Challenges
                        </h3>
                    </div>

                    <div className='d-flex flex-lg-row gap-lg-5 flex-column'>
                        <div className='d-flex flex-column justify-content-center align-items-center'>
                            <p>
                                <span className='fw-bold'>Dr. Angela Chaudhuri</span>, Chief Catalyst at Swasti, has been recognized by the United Nations Framework Convention on Climate Change (UNFCCC) as part of their COP29 Impact Makers Campaign.
                            </p>
                            <p>
                                This recognition reflects the work being done by Swasti’s Precision Action Towards Climate and Health (PATCH) platform, which connects health and climate through real-time data to address the needs of vulnerable populations.
                            </p>
                            <p>
                                By fostering collaboration and community-driven action, PATCH offers practical solutions to tackle the health impacts of climate change. The feature is a call to action for policymakers, organisations, and individuals to support integrated approaches to health and climate, using tools like PATCH to ensure no community is left behind.
                            </p>
                        </div>

                        <div>
                            <Image src='/emailer/dec-2024/impact_makers.png' alt='' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ImpactMakers
