import React, { forwardRef } from 'react'
import { Image } from 'react-bootstrap'

const CacMember = forwardRef((props, ref) => {
    return (
        <>
            <div className='container p-4' ref={ref}>
                <div className='d-flex flex-column gap-3 flex-column justify-content-center'>
                    <div className='d-flex flex-row justify-content-center '>
                        <h3 className='mb-0 py-3 px-lg-5 fw-bolder'>
                            CAC MEMBER SPOTLIGHT - IN THEIR OWN WORDS
                        </h3>
                    </div>

                    <div className='text-center'>
                        <Image src="/emailer/dec-2024/cac_member_spotlight.png" alt='' />
                    </div>

                    <div>
                        <p>
                            Live to Love is a grassroots-driven non-profit organisation that empowers communities to serve as guardians of the Himalayas and its people. The goal of Live to Love is to create sustainable solutions for the future of the region and foster a culture of empowerment and resilience. Our work ranges from building award-winning schools, protecting young girls and women from violence and assault, and providing medical care and disaster relief to promoting equality. Live to Love’s projects are grassroots—all our projects are locally led, inclusive—we are committed to eliminating barriers based on culture, race, language, religion, sexuality, ability, class and age, respectful of regional cultures – we honour indigenous traditions, heritages and experiences, and are environmentally conscious.
                        </p>

                        <p>
                            Our flagship initiatives include the Druk Padma Karpo School (DPKS), a visionary school providing holistic education to students coming from marginalised communities. We also take pride in championing our Kung Fu Nuns, who fight for gender equality and environment awareness through their Pad Yatras and Bike Yatras. As a part of their training, they equip young girls with self-defence and martial arts techniques. Primarily operating in Ladakh, Live to Rescue is another key project that focuses on animal rescue and welfare. Since its inception in 2014, Live to Rescue has grown into a family of 1200 animals who have been provided with love, warmth, and care.
                        </p>
                    </div>

                    <div className='text-center '>
                        <a href='livetolove.org' className='text-dblue text-decoration-underline' target='_blank'>
                            Learn more
                        </a>
                    </div>

                    <div className='d-flex flex-column justify-content-center align-items-center'>
                        <a href='livetolove.org/donate' className='bg-sblue p-2 rounded-4 d-inline-block px-4 text-black'>
                            You can support our initiatives by donating here
                        </a>
                    </div>

                    <div className='border-1 mt-4' style={{ border: "1px dashed black" }}>
                    </div>

                </div>
            </div >
        </>
    )
});

export default CacMember;
