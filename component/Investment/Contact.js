import React from 'react'
import { Container } from 'react-bootstrap'
import ContactForm from '../Investment/ContactFrom'

function Contact() {
  return (
      <Container fluid style={{background:'#3690C0'}} className='mt-4 py-5' id="invest">
          <Container className='text-center mb-5'>
        <h2 className='fs-2 text-white fw-medium'>Drive Change with Us</h2>
        <img src="/investment/code.svg"/>
              <p className="fs-5 text-white fw-light">Invest in resilience and be a catalyst for global change.</p>
          </Container>
          <Container>
           <ContactForm/>   

          </Container>
    </Container>
  )
}

export default Contact
