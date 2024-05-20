import React from 'react'
import {Container} from 'react-bootstrap'

function Circle() {
  return (
      <Container className='justify-content-center text-center py-5' id="sdgs">
          <h2 className='fs-2 fw-medium'>We are Aligned with UN SDGs</h2>
          <img src="/investment/code.svg" />
          <Container className='py-3 w-50'>
          <img src="/investment/circel.png" className='img-fluid'/>    
          </Container>
          

    </Container>
  )
}

export default Circle
