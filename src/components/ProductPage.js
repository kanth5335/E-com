import React from 'react'
import {Card,Button,ListGroup,ListGroupItem,Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const ProductPage = ({prods}) => {
  return (
    <Container className='ProductCard'>
<Card className='text-center my-3' style={{ width: '18rem' }}>
  <Link to={`/Description/${prods._id}`}><Card.Img variant="top" src={prods.image}/></Link>
  <Card.Body>
    <Card.Title>{prods.name}</Card.Title>
   <Link to={`/Checkout/${prods._id}`}><Button  className='m-1' disabled={prods.countInStock ===0}>Add to Cart</Button></Link>
  </Card.Body>
</Card>
    </Container>
  )
}

export default ProductPage