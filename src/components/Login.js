import React from 'react'
import { Container,Image,Row,Col,ListGroup,Button,ListGroupItem,InputGroup,FormControl,Form } from 'react-bootstrap'


const Login = () => {
  return (
    <Container className='my-5'>
          <Row>
              <Col lg={6} className='my-5'>
              <>
              <h1 className='text-center m-3'>Login Here @</h1>
  <InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
    <FormControl
      placeholder="Username"
      aria-label="Username"
      aria-describedby="basic-addon1"
      type="email"
    />
  </InputGroup>

  <InputGroup className="mb-3">
    <FormControl
      placeholder="Password"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
      type='password'
    />
    <InputGroup.Text id="basic-addon2">Password</InputGroup.Text>
  </InputGroup>

  
  <InputGroup className="mb-3">
      
      <Button className='btn-block' type="reset">Login</Button>
      <Button className='btn-block ms-auto'>Register</Button>
  </InputGroup>

</>
              </Col>

            
            <Col lg={6} className="gif-login">
<Image src="https://i.gifer.com/7DPQ.gif"/>

            </Col>

          </Row>

    </Container>
  )
}

export default Login