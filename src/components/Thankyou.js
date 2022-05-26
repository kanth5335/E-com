import React from 'react'
import { Container } from 'react-bootstrap'

const Thankyou = () => {
    let DelDate =Date();
  return (
    <Container>
        <div  className='text-center my-5'>
        <h1>Thank you , Have a nice day!</h1>
        <h2>Your order delivered on <>"{DelDate}"</></h2>
        </div>
    </Container>
  )
}

export default Thankyou