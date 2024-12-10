import React, { forwardRef } from 'react'
import { Image } from 'react-bootstrap'

const CacDigitalCampaigns = forwardRef((props, ref) => {
    return (
        <>
            <div className='container p-4 py-5 bg-sblue' ref={ref}>
                <div className='d-flex flex-column gap-3 flex-column justify-content-center'>

                    <div className='d-flex flex-row justify-content-center '>
                        <h3 className='mb-0 bg-yellow py-3 px-5 fw-bolder'>
                            CAC’s DIGITAL CAMPAIGNS:
                        </h3>
                    </div>

                    <div className='d-flex flex-column justify-content-center align-items-center'>
                        <h3 className='text-dblue p-2 rounded-4 d-inline-block px-4'>
                            Raising Awareness, Inspiring Action
                        </h3>
                    </div>

                    <div className='text-center'>
                        <p>
                            Community Action Collab leverages digital campaigns to amplify its mission of building resilience among vulnerable communities. Through impactful storytelling, collaborative content creation, and engaging visuals, CAC highlights critical issues like climate change, health, and social protection. These campaigns empower partners to showcase interventions, voice concerns, and attract investment while raising awareness about everyday emergencies.
                        </p>
                    </div>

                    <div className=''>
                        <h3>
                            <span className='fw-bold'>POSHAN MAH</span> (September 1–30)
                        </h3>
                        <div className='d-flex flex-column gap-lg-5 gap-4'>
                            <div className='d-flex flex-lg-row flex-column gap-lg-5 gap-2'>
                                <div>
                                    <Image src="/emailer/dec-2024/poshan_mah_1.png" alt="" />
                                </div>
                                <div className='d-flex flex-column justify-content-center'>
                                    <p>
                                        This Rashtriya Poshan Maah, we launched the #SwadAnusar Campaign in collaboration with Swasti and the South Asia Social Norms and Agency Learning Collaboration (SA SNALC). The collaborative member organisations joined the initiative focusing on nutrition-related issues like anaemia and malnutrition among young children, adolescent girls, and women of reproductive age, including pregnant and postpartum women.
                                    </p>
                                </div>
                            </div>
                            <div className='d-flex flex-lg-row flex-column-reverse gap-lg-5 gap-2'>
                                <div className='d-flex flex-column justify-content-center'>
                                    <p>
                                        The CAC members who joined were those working directly in the area of nutrition or addressing nutrition as a cross-cutting issue within their broader interventions. The campaign brought together government officials, NGOs, and community leaders to underscore the critical role of nutrition in health and resilience. #SwadAnusar has elevated awareness of community nutrition needs, offering fresh perspectives on grassroots solutions.
                                    </p>
                                </div>
                                <div>
                                    <Image src="/emailer/dec-2024/poshan_mah_2.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='border-1 my-4' style={{ border: "1px dashed black" }}>
                    </div>

                    <div>
                        <h3>International Day for Disaster Risk Reduction</h3>
                        <div className='d-flex flex-column gap-lg-5 gap-4'>
                            <div className='d-flex flex-lg-row flex-column gap-lg-5 gap-2'>
                                <div>
                                    <Image src="/emailer/dec-2024/risk_reduction.png" alt="" />
                                </div>
                                <div className='d-flex flex-column justify-content-center'>
                                    <p>
                                        To mark the International Day for Disaster Risk Reduction, CAC launched a campaign to amplify awareness and foster engagement on disaster preparedness. CAC created a social media toolkit for members, shared key messages on its channels, and hosted a LinkedIn Live with Governing Council member Hari Krishna N to discuss empowering communities and youth for a disaster-resilient future.
                                    </p>
                                </div>
                            </div>
                            <div className='d-flex flex-lg-row flex-column-reverse gap-lg-5 gap-2'>
                                <div className='d-flex flex-column justify-content-center'>
                                    <p>
                                        Key messages emphasised child-centred DRR strategies, youth empowerment, the value of disaster preparedness, and the importance of creating safer schools. A LinkedIn blog further expanded on campaign themes. The campaign aimed to inspire collective action and raise awareness about the need to empower youth and communities with the tools and resources to mitigate disaster risks effectively.
                                    </p>
                                </div>
                                <div>
                                    <Image src="/emailer/dec-2024/risk_reduction_2.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='border-1 my-4' style={{ border: "1px dashed black" }}>
                    </div>

                    <div>
                        <h3>COP29 - Climate Change Conference</h3>
                        <div className='d-flex flex-column gap-lg-5 gap-4'>
                            <div className='d-flex flex-lg-row flex-column gap-lg-5 gap-2'>
                                <div>
                                    <Image src="/emailer/dec-2024/shiv_kumar.png" alt="" />
                                </div>
                                <div className='d-flex flex-column justify-content-center'>
                                    <p>
                                        In the COP29 campaign, CAC effectively amplified its partners’ message for urgent climate action, leveraging the global stage to promote sustainable environmental practices and policies. The campaign aimed to influence discussions and decision-making among international leaders and stakeholders, pushing for robust commitments to combat the escalating challenges posed by climate change.
                                    </p>
                                </div>
                            </div>
                            <div className='d-flex flex-lg-row flex-column-reverse gap-lg-5 gap-2'>
                                <div className='d-flex flex-column justify-content-center'>
                                    <p>
                                        This strategic engagement highlighted CAC’s role in fostering collaborative solutions and driving significant environmental policy advancements.
                                    </p>
                                </div>
                                <div>
                                    <Image src="/emailer/dec-2024/env_chellange.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
});

export default CacDigitalCampaigns
