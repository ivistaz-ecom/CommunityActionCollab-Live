import React from 'react'
import { Container } from 'react-bootstrap'
import ContactForm from '../Investment/ContactFrom'
import Link from 'next/link'

function Footer() {
  return (
      <Container fluid className="wbg-dark py-2 text-center">
          <p className='fs-5 text-white fw-light'>For more information, please contact Arathy Nair at <Link href="mailto:arathy.n@catalysts.org" className='text-decoration-none text-white'>arathy.n@catalysts.org</Link></p>

    </Container>
  )
}

export default Footer
