import React, { forwardRef } from 'react'

const LearningEvents = forwardRef((props, ref) => {
    return (
        <>
            <div className='container py-4 p-0' ref={ref}>
                <div className='d-flex flex-column gap-3 flex-column justify-content-center'>
                    <div className='d-flex flex-row justify-content-center '>
                        <h3 className='mb-0 bg-yellow py-3 px-5'>
                            Learning Events
                        </h3>
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
                        <div className='d-flex flex-column mt-3'>
                            <p>Orientation session on the RSVC Model for Implementation Partners brought by CAC in partnership with the Office of the Principal Scientific Adviser to the Government of India (PSA)</p>
                            <p>Conducted in English on 12 December 2024</p>
                            <p>Conducted in Hindi on 13 December 2024</p>
                            <a href='https://lnkd.in/g6W8kJ7W' target='_blank' className='text-dblue'>
                                <p>
                                    Registration
                                </p>
                            </a>
                        </div>

                        <div className='mt-3'>
                            <p>Theory of Change and Logic Models.</p>
                            <p>Discover how to create a meaningful and lasting impact in your community with our session on Theory of Change and Logic Models.</p>
                            <p>11 Dec 2024</p>
                            <a href='https://shorturl.at/nkvPF' target='_blank' className='text-dblue'>
                                <p>
                                    Registration
                                </p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
});

export default LearningEvents
