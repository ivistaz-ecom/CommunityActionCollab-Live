import React from 'react'
import { Image } from 'react-bootstrap'

const SocialProtectionProject = () => {
    return (
        <>
            <div className='container p-4 bg-yellow py-5'>
                <div className='d-flex flex-column gap-3 justify-content-center'>
                    <div className='d-flex flex-column gap-5 justify-content-center'>
                        <div className='d-flex flex-column justify-content-center align-items-center'>
                            <h2 className='bg-dblue text-white circle-b'>3</h2>
                        </div>
                    </div>

                    <div className='d-flex flex-row justify-content-center'>
                        <h3 className='mb-0 bg-yellow py-3 px-lg-5 fw-bolder'>
                            Social Protection Projects
                        </h3>
                    </div>

                    <div className="row g-3 g-lg-4">
                        <div className=''>
                            <Image
                                src="/emailer/dec-2024/ssp1.png"
                                alt="Social Protection"
                                className='img-fluid mb-3 float-start pe-lg-4'
                            />
                            <p>
                                Swasti’s Social Protection Programme, a cornerstone of resilience-building under the CAC umbrella, has achieved remarkable milestones. Operating 207 universal help desks across 26 states and 159 districts, in collaboration with 153 CAC partners, the programme provides localised support to address service denial and exclusion. Through its innovative model, the programme has resolved 107,423 cases of service denial or exclusion, ensuring individuals receive their entitled benefits.
                            </p>
                            <p>
                                Recent partnerships include Rotary Midtown Bangalore for establishing Social Protection Help Desks in Bengaluru, which streamline access to government welfare schemes for marginalised communities. Similarly, the “Unified Help Desk Programme,” funded by IndusInd CSR, is active in Rajasthan, Uttar Pradesh, and Tamil Nadu, targeting 1,15,000 individuals with services in agriculture, education, healthcare, financial inclusion, and livelihoods. This effort is mirrored in the aspirational districts namely- Baran in Rajasthan, Baraich in Uttar Pradesh, and Virudhnagar district in Tamil Nadu where Phase 2 of the “Unified Help Desk Programme” is underway and is being funded by IndusInd CSR through anchor partners WOTR, Aga Khan Foundation (AKF) and PRADAN.
                            </p>

                            <p>
                                Swasti, in partnership with Nasscom Foundation, is addressing digital exclusion in Rajasthan through the establishment of five Digital Resource Centers. These centers aim to train 22,500 participants and upskill Digital Ambassadors, fostering digital literacy and opportunity in rural areas.
                            </p>
                            <p>
                                Meanwhile, health and social protection awareness form the focus of two key projects funded by TATA AIG. In Nagpur, the programme creates awareness about tobacco prevention among adolescents and fosters healthier communities. In Nagaland, efforts are centered on social protection schemes and improving health services through a Mobile Medical Van, which extends preventive health awareness and medical support to remote and vulnerable populations.
                            </p>
                            <p>
                                Through these integrated efforts in social protection, digital literacy, and health, Swasti continues to uplift underserved populations and foster sustainable, community-driven change across India.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SocialProtectionProject
