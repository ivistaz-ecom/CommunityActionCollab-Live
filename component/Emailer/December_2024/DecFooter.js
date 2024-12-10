import React from 'react'
import { Image } from 'react-bootstrap'

const DecFooter = () => {
    return (
        <>
            <div className='container bg-gray mt-5 p-0'>
                <div className='d-flex flex-column gap-3 flex-column justify-content-center align-items-center'>
                    <div className='d-flex flex-col justify-content-center gap-3' style={{ marginTop: '-15px' }}>
                        <a href='https://communityactioncollab.org/' target='_blank' className='cursor-pointer'>
                            <Image src='/emailer/dec-2024/footer-icon-link.svg' alt='' />
                        </a>
                        <a href="https://x.com/i/flow/login?redirect_after_login=%2FCommActCollab" target='_blank' className='cursor-pointer'>
                            <Image src='/emailer/dec-2024/twitter.svg' alt='' />
                        </a>
                        <a href='https://www.linkedin.com/showcase/community-action-collab/' target='_blank' className='cursor-pointer'>
                            <Image src='/emailer/dec-2024/linkedin.svg' alt='' />
                        </a>
                        {/* <Image src='/emailer/dec-2024/instagram.svg' alt='' /> */}
                    </div>

                    <div>
                        <h3 className='text-bold'>Our mailing address is:</h3>
                    </div>

                    <div>
                        <p>
                            Catalyst Group Oﬃce, Raghavendra Nilaya, 25, 1st Main Rd., AECS Layout, Sanjaynagar, Bengaluru, Karnataka 560094
                        </p>
                    </div>

                    <div>
                        <p>
                            You are receiving this email because you are a member of the Community Action Collab.
                        </p>
                    </div>

                    <div>
                        <p className='text-dblue'>Click here to unsubscribe from this list.</p>
                    </div>

                    <div style={{ background: "#E0E0E0" }} className='w-100 p-4 text-center'>
                        <p className='fst-italic mb-0' > Copyright © 2024 Catalyst Group. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DecFooter
