import React from 'react'
import {Button, Container,Form,FormControl,InputGroup} from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Address = () => {
  return (
    <div>
      <Container className='my-5'>
      <h1 className='text-center my-3'>Add a new address</h1>
  <InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
    <FormControl
      placeholder="Username"
      aria-label="Username"
      aria-describedby="basic-addon1"
    />
  </InputGroup>

  <InputGroup className="mb-3">
    <FormControl
      placeholder="Recipient's Full Name"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <InputGroup.Text id="basic-addon2">Name</InputGroup.Text>
  </InputGroup>

  <InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon3">
      example@mail.com
    </InputGroup.Text>
    <FormControl id="basic-url" aria-describedby="basic-addon3" />
  </InputGroup>

  <InputGroup className="mb-3">
    <InputGroup.Text>+44</InputGroup.Text>
    <FormControl aria-label="Amount (to the nearest dollar)" />
    <InputGroup.Text>Mobile</InputGroup.Text>
  </InputGroup>
  <InputGroup className="mb-3">
    <InputGroup.Text>Postcode</InputGroup.Text>
    <FormControl aria-label="Amount (to the nearest dollar)" />
    <InputGroup.Text>Landmark</InputGroup.Text>
  </InputGroup>
  <InputGroup className='mb-3'>
    <InputGroup.Text>Full Address</InputGroup.Text>
    <FormControl as="textarea" aria-label="With textarea" />
  </InputGroup>
  <InputGroup>
<Link to="/Thankyou">
<Button className='btn-block rounded' type='submit'>Submit</Button>
</Link>
</InputGroup>
</Container>
    </div>
  )
}

export default Address