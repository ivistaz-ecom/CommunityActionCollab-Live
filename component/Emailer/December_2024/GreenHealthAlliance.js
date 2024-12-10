import React, { forwardRef } from 'react'
import { Image } from 'react-bootstrap'

const GreenHealthAlliance = () => {
    return (
        <>
            <div className='container p-4 bg-sblue py-5' >
                <div className='d-flex flex-column gap-3 flex-column justify-content-center'>
                    <div className='d-flex flex-column gap-5 flex-column justify-content-center'>
                        <div className='d-flex flex-column justify-content-center align-items-center'>
                            <h2 className='bg-dblue text-white circle-b'>2</h2>
                        </div>
                    </div>

                    <div className='d-flex flex-row justify-content-center '>
                        <div className='border-bottom-0 border-top-0' style={{ border: '10px solid #2B7B99' }}>
                            <h3 className='mb-0 bg-dyellow py-3 px-5  border-bottom-0 border-top-0 fw-bold' style={{ border: '8px solid #C7F0E3' }}>
                                Green Health Alliance
                            </h3>
                        </div>
                    </div>

                    <div className='text-center'>
                        <h3 className='fw-bolder'>Online Side Meeting COP29: The Green Health Alliance Members’ Round Table</h3>
                    </div>

                    <div className='text-center'>
                        <Image src="/emailer/dec-2024/online_meeting.png" alt='' className='w-100' />
                    </div>

                    <div>
                        <p>
                            On 19th November 2024, ahead of COP29 Health Day, the Green Health Alliance (GHA) hosted a 90-minute virtual round table through Swasti, with 30 participants from organisations such as USAID, SEEDS India, the Office of the Principal Scientific Adviser, and the Catalyst Group. The event focused on the intersections of climate and health, aiming to enhance climate-resilient health systems. Discussions centred on the health impacts of climate change on vulnerable groups and promoting collaborative solutions.
                        </p>
                        <p>
                            The session began with an overview of GHA’s mission to drive partnerships and innovative climate-resilient healthcare approaches. Natasha Sharma showcased Gutter ki Machli, a film demonstrating urban climate resilience through arts-based storytelling. Another highlight was the Climate Care Champions Program, which equips frontline health workers with tools to combat climate-related health challenges. Practical solutions like cool roofing and shading techniques were discussed by Sushmita Malaviya, and Dr. Syama B. Syam discussed the benefits of solar-powered systems in Meghalaya for healthcare delivery. Dr. Kamalika Banerjee introduced the Manthan Platform, a digital hub designed to foster collaboration and innovation in climate-health challenges.
                        </p>
                        <p>
                            Key discussion points included the necessity of local, grassroots interventions, empowering frontline workers, and leveraging platforms like GHA and Manthan to extend their impact. Participants also emphasised the importance of addressing emerging issues such as microplastics and air pollution, advocating for data-driven and community-oriented strategies.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GreenHealthAlliance
