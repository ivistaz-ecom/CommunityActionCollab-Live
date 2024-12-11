import React, { forwardRef } from 'react'

const LearningEvents = forwardRef((props, ref) => {
    return (
        <>
            <style>
                {
                    `
                    .dot-em2::before {
                        content: '•';
                        margin-right: 8px;
                        color: #297B99;
                        font-size: 40px !important;
                    }
                    .dot-em2 {
                        margin-top: -18.5px;
                    }
                    `
                }
            </style>
            <div className='container py-4 p-0' ref={ref}>
                <div className='d-flex flex-column gap-3 flex-column justify-content-center'>
                    <div className='d-flex flex-row justify-content-center'>
                        <div className='border-bottom-0 border-top-0' style={{ border: '10px solid #2B7B99' }}>
                            <h3 className='mb-0 bg-dyellow py-3 px-5 border-bottom-0 border-top-0 border-white fw-bold' style={{ border: '8px solid' }}>
                                Learning Events
                            </h3>
                        </div>
                    </div>

                    <div className='text-center'>
                        <h4 className='text-dblue'>Winter Wellbeing Session</h4>
                    </div>

                    <div className='px-4'>
                        <p>
                            On 22 November 2024, CAC conducted a one-hour virtual online session on winter wellness attended by representatives from CAC member organisations. The session provided participants with practical tips and advice to protect themselves and their communities from cold weather-related health risks. Participants were introduced to preventive measures and essential practices to stay safe and healthy during winter.
                        </p>
                        <p>
                            The session covered key health concerns such as cold waves, respiratory illnesses, and smog, focusing on simple solutions like proper clothing, nutritious diets, and home care measures. Special attention was given to supporting vulnerable groups, including children, the elderly, and outdoor workers. The team also highlighted how community members can prepare for emergencies and ensure household readiness.
                        </p>
                        <p>
                            To enhance outreach, winter-specific IEC materials were shared, which members can use to raise awareness in their localities. The session concluded with a reminder that preparedness is key to staying safe during the colder months.
                        </p>
                    </div>

                    <div className='bg-yellow p-4 d-flex flex-column'>
                        <h4 className='text-bold'>Upcoming Events</h4>
                        <div className='d-flex flex-row mt-3'>
                            <div className='dot-em2'></div>
                            <div>
                                <p>Orientation session on the RSVC Model for Implementation Partners brought by CAC in partnership with the Office of the Principal Scientific Adviser to the Government of India (PSA)</p>
                                <p>Conducted in English on 12 December 2024</p>
                                <p>Conducted in Hindi on 13 December 2024</p>
                                <a href='https://lnkd.in/g6W8kJ7W' target='_blank' className='text-dblue text-decoration-underline'>
                                    <p>
                                        Registration
                                    </p>
                                </a>
                            </div>
                        </div>

                        {/* <div className='d-flex flex-row mt-3'>
                            <div className='dot-em2'></div>
                            <div>
                                <p>Theory of Change and Logic Models.</p>
                                <p>Discover how to create a meaningful and lasting impact in your community with our session on Theory of Change and Logic Models.</p>
                                <p>11 Dec 2024</p>
                                <a href='https://shorturl.at/nkvPF' target='_blank' className='text-dblue text-decoration-underline'>
                                    <p>
                                        Registration
                                    </p>
                                </a>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
});

export default LearningEvents
