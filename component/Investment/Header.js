import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary header">
        <div className="container-fluid">
        <Link href="/" className="navbar-brand">
            <Image src='/images/cac_Logo.svg' width={200} height={50} alt='cac log' className='img_logo' />
          </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">

        <li className="nav-item">
        <Link href="#about-us" className="me-4 nav-link fs-6">About Us</Link>
        </li>
        <li className="nav-item">
        <Link href="#our-work" className="me-4 nav-link fs-6">Our Work</Link>
              </li>
              <li className="nav-item">
              <Link href="#sdgs" className="me-4 nav-link fs-6">SDGs</Link>
        </li>
       
                          
             
            
              <li className="nav-item">
              <Link className='me-4 fs-6 btn btn-primary rounded-0 text-black' href="#invest" style={{background:'#FDD800',border:'1px solid #DEBE00'}}>Invest in resilience</Link>
        </li>
      </ul>
    </div>
  </div>
      </nav>

          
      <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
  <div class="offcanvas-header">
  <Image src='./images/cac_Logo.svg' width={200} height={50} alt='cac log' className='img_logo'></Image>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
  <nav className="">
  <div className="container-fluid">
    <div className="navbar" >
                <ul className="navbar-nav" style={{width:'100%'}}>
    
        <li className="nav-item">
        <Link href="#about-us" className="me-4 nav-link fs-6" data-bs-toggle="offcanvas" >About Us</Link>
                  </li>
        <hr/>
        <li className="nav-item">
        <Link href="#our-work" className="me-4 nav-link fs-6" data-bs-toggle="offcanvas"  >Our Work</Link>
                  </li>
                  <hr/>         
              <li className="nav-item">
              <Link href="#sdgs" className="me-4 nav-link fs-6" data-bs-toggle="offcanvas">SDGs</Link>
                  </li>
                  <hr/>
              <li className="nav-item">
              <Link className='me-4 nav-link fs-6' href="#invest" data-bs-toggle="offcanvas">Invest in resilience</Link>
              </li><hr/>
              
      </ul>
    </div>
  </div>
      </nav>
  </div>
</div>





    </div>
  )
}

export default Header
