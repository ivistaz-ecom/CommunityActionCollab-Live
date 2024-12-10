import React, { forwardRef } from 'react'
import { Image } from 'react-bootstrap'

const Highlights = forwardRef((props, ref) => {
    return (
        <>
            <div className='container bg-yellow p-0' ref={ref}>
                <Image src='/emailer/dec-2024/heighlights_title_2.svg' alt='banner' className='w-100' />
            </div>


            <div className='container p-4 bg-yellow py-5'>
                <div className='d-flex flex-column gap-3 flex-column justify-content-center'>
                    <div className='d-flex flex-column justify-content-center align-items-center'>
                        <h2 className='bg-dblue text-white circle-b'>1</h2>
                    </div>

                    <div className='text-center'>
                        <h3 className='fw-bolder'>Emergency Response in Gujarat, <br></br> Andhra Pradesh and Tamilnadu</h3>
                    </div>

                    <div className='text-center'>
                        <Image src='/emailer/dec-2024/emergency_response.png' alt='' />
                    </div>
                    <div>
                        <p>
                            In Tripura, our partner VHA distributed 800 ration kits, aiding 4,000 people in villages including Lawgang, Kusharghat, and Baishnabpur. In Gujarat, Ujas Mahila Sangathan supported 23,000 individuals with shelter kits, rations, and blankets in districts such as Kachchh and Jamnagar. In Andhra Pradesh, Ankitha, Jeevan Rekha Mahila Sangham (JRMS), and PAID provided shelter kits, ration packs, meals, and clean water in areas including Vijayawada.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
});

export default Highlights
