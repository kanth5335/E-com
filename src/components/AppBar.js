import React from 'react'
import {Navbar,Container,Form,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const AppBar = () => {
  return (
    <div>
        <Navbar bg="dark" variant="dark" expand="lg">
  <Container>
    <Navbar.Brand  href="/">StorZZ</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      
      <Form className="d-flex ms-auto">
        <Link to="/Login">
      <Button className='me-2 rounded'  variant="outline-light">login</Button>
      </Link>
   
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default AppBar