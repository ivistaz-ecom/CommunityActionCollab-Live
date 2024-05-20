import React from 'react'
import { Container } from 'react-bootstrap'
import Image from 'next/image'

function Carousel() {

    const actions = [
        {
            'id':1,
            'image': '/investment/caro_1.png',
            'title': 'Call4Svasth (C4S)',
            'heading': 'A community-led, tech-enabled, blended tele-triage, and community care service model to address the barriers and enable access to overall primary healthcare.',
            'desc': `
            <p > <strong>The programme services include:</strong></p>
            <ul>
            <li><strong>Telehealth</strong>, providing remote medical consultations and other primary health services.</li>
            <li><strong>Telecounseling</strong>, offering remote mental health counselling for mild cases.</li>
            <li><strong>Social protection services</strong>, assisting the community in navigating the process to avail of government welfare schemes.</li>
            </ul>
            <p>The initiative serves vulnerable groups such as sex workers, migrants, urban poor, LGBTQIA+ community, and tribal populations in 6 states in India - Karnataka, Delhi, Rajasthan, Tamil Nadu, Odisha, and Punjab. Since 2021, the programme has provided services to 1,08,788 unique individuals.</p>
            <p>We aim to expand our reach to four more states, assisting 1,50,000 individuals in FY 2024-25. Additionally, we plan to introduce screening for Non-Communicable Diseases (NCDs) and extend our services to new areas within existing states.</p>
            `,
            'button':'https://call4svasthswasti.in/'
        },

        {
            'id':2,
            'image': '/investment/caro_2.png',
            'title': 'Economic Resilience',
            'heading': 'A household level-resilience model that focuses on localised solutions to strengthen individuals and therefore the community to withstand unforeseen shocks.',
            'desc': `
            <p > <strong>The programme services include:</strong></p>
            <ul>
            <li><strong>Conservation –</strong> protect and improve all sources of income.</li>
            <li><strong>Diversification –</strong> to spread out risks and have multiple options.</li>
            <li><strong>Aggregation –</strong> to bring resources together to create better social capacity.</li>
            <li><strong>Risk Pooling –</strong> create mechanisms to reduce risks to income and assets.</li>
            </ul>
            <p>Data is collected in an ongoing manner using the Household-level Resilience Index, engaging communities and helping households to identify actions to build resilience based on their needs.</p>
            <p>Economic Resilience is being piloted focusing on marginal farmers, youth in tribal and predominantly agriculture-based economies, and artisanal migrant fisherfolks in Karnataka, Madhya Pradesh and Odisha. Supported by the Skoll Foundation and Vitol Foundation, the intervention is building the resilience of 6,000 households in these three locations.</p>
            <p>We are actively seeking investors to support us in scaling our proven model beyond current locations to benefit the 25,000 most vulnerable households.</p>
            
            
            `,
            'button':'https://communityactioncollab.org/economic-resilience'
        },
        {
            'id':3,
            'image': '/investment/caro_4.png',
            'title': 'Universal Help Desk (UHD)',
            'heading': 'UHD is designed to remove barriers to accessing social protection and welfare services, thus making them available to those who need them the most.',
            'desc': `
            <p > <strong>Geared towards addressing three primary challenges, Universal Help Desks (UHDs):</strong></p>
            <ul>
            <li>Bridge the gap between the demand and supply of services.</li>
            <li>Enhance awareness of available schemes and programmes.</li>
            <li>Act as central hubs for facilitating connections with both public and private service providers.</li>
            </ul>
            <p>UHD centres are manned by Help Desk Facilitators who are trained local personnel. Set up within a community organisation, NGO, factory or any other location, UHD centres provide highly personalised and impactful support to communities.</p>
            <p>Currently operating in 17 states covering 102 districts, the initiative impacts approximately 11 Lakh (1.1 Million) individuals, predominantly from most marginalised communities like sex workers, people living with HIV, transgender, migrants, construction workers, and men who have sex with men (MSM).</p>
            <p>We are actively seeking funding to expand this impactful solution to reach 50,000 members from vulnerable communities covering 25 additional districts.</p>
            `,
            'button':'https://swasti.org/our_work/Social-Protection'
        },
        {
            'id':4,
            'image': '/investment/caro_3.png',
            'title': 'Street Vendors Well-being & Resilience',
            'heading': 'Our solution for the resilience of street vendors, especially women, prioritises their well-being and empowerment, covering improved health, safety, security, social protection, voice, and agency.',
            'desc': `
            <p ><strong>This solution focuses on:</strong></p>
            <ul>
            <li>Capacity building and awareness on rights and entitlements.</li>
            <li>Improving access to social protection, primary health, and financial services.</li>
            <li>Utilising on-site locations as learning sites for demonstrating comprehensive interventions.</li>
            <li>Enhancing the voice and agency of the community.</li>
            </ul>
            <p>The intervention has provided services to more than 30,000 street vendors in Maharashtra, Delhi, Odisha, Telangana, West Bengal, Haryana, and Andhra Pradesh.</p>
            <p>We now seek funding to scale the initiative to reach more street vendor communities. Our goal is to reach 1,75,000 street vendors nationwide by the year 2024-25, fostering impactful change.</p>
            `,
            'button':'https://upfront.global/our-reach'
        },
        {
            'id':5,
            'image': '/investment/caro_5.png',
            'title': 'Precision Health',
            'heading': 'A public health preparedness platform catering to the marginalised through comprehensive, decentralised environmental and disease surveillance systems.',
            'desc': `
            <p ><strong>The platform offers solutions across four key areas:</strong></p>
            <ul>
            <li><strong>Wastewater-based Epidemiology</strong> enables the detection of viruses in faeces before they appear in blood samples, allowing for early citywide infection alerts and trends in viral load by monitoring sewage.</li>
            <li><strong>An Event-based Surveillance Tool</strong> collects and analyses data from various media sources to identify emerging health crises.</li>
            <li><strong>A Geographical Information System (GIS)</strong> which facilitates real-time decision-making through publicly accessible dashboards for cities.</li>
            <li><strong>Participatory Surveillance</strong> involves a proactive approach leveraging community intelligence for the early detection of infectious diseases and other health issues.</li>
            </ul>
            <p>Our user-friendly dashboards provide real-time outbreak warnings, and public access to this data through social media and workshops enables local authorities to act swiftly. We are operational in and have conducted Wastewater-based Epidemiology in 5 cities across India namely, Bengaluru, and Lucknow. Jodhpur, Tiruchirappalli and Thiruvananthapuram.</p>
            <p>We aim to be active in 25 cities across Asia in the next three years. With additional funding, we can turn this ambition into reality.</p>
            `,
            'button':'https://www.precisionhealth.in/'
        },
]



  return (
      <Container className="py-3" fluid style={{background: 'linear-gradient(180deg, #FCE76C 0%, #1C7C9C 100%)'}} id="our-work">
          <Container className='text-center'>
              <h2 className='fs-2 fw-medium'>Building Resilience, Driving Action</h2>
              <Image src="/investment/code.svg" className="img-fluid" width={100} height={100} />
          <p className='fs-5 fw-light'>Resilience is a multifaceted concept requiring a comprehensive solution addressing various vulnerability factors. Through our evidence-based solutions we aim to improve health, livelihoods and social protection for the most marginalised. Join us in creating a future where setbacks become springboards for vulnerable communities to ‘bounce forward’.</p>
          </Container>
          <Container className='' >  
<div id="carouselExample" class="carousel slide my-1" style={{background:'#fff'}}>
  <div class="carousel-inner" >
                    
                      
                      {actions.map((item, index) => (
                          <div className={`carousel-item  ${index === 0 ? 'active' : ''}`} key={index}>
                         <div className='row' >
                             <div className='col-lg-4 col-sm-12 d-flex align-items-center' >
                            <Image src={item.image} width={435} height={480}  className='img-fluid'/>
                             </div>
                             <div className='col-lg-7  col-sm-12 justify-content-center d-flex flex-column  py-4 px-4'>
                                      <h3 className='fs-4 fw-medium'>{item.title}</h3>
                                      <h5 className='fs-5 fw-medium'>{item.heading}</h5>
                                      <p className='fs-6 fw-light' dangerouslySetInnerHTML={ {__html:item.desc}}/>
                                      <a href={item.button} className='btn btn-primary wbg-invest border-0 text-white' style={{ width: '200px', background: '#3690c0 !important' }}>Learn More</a>
                             </div>                          
                            </div>
                     </div>
                      ))}
                      
                  </div>
                  <div className='ms-auto position-absolute w-100 d-flex justify-content-between' style={{top:'50%'}}>
                      <button className='btn btn-primary  invest-round border-0' type="button" data-bs-target="#carouselExample" data-bs-slide="prev" style={{borderRadius:'100px !important',width:'50px',height:'50px',padding:'8px',background:'#3690c0bf'}}><span class="carousel-control-prev-icon" aria-hidden="true"></span></button>
                      <button className='btn btn-primary invest-round border-0' type="button" data-bs-target="#carouselExample" data-bs-slide="next" style={{borderRadius:'100px !important',width:'50px',height:'50px',padding:'8px',background:'#3690c0bf'}}><span class="carousel-control-next-icon" aria-hidden="true"></span></button>
                  </div>


</div>
          </Container>
    </Container>
  )
}

export default Carousel
