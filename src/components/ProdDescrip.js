import React,{useState} from 'react'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import {Row,Col,Image,ListGroup,Card,Button, Container, ListGroupItem,FormControl} from 'react-bootstrap'
import products from './ProdData';

const ProdDescrip = () => {

  const params = useParams();
  const prods = products.find((prods)=>prods._id===params.id);

  return (
    <div>
       <Container className='my-5'>
                <Row>
                   <Col lg={6} md={12}>
                   
                   <Image src={prods.image} alt={prods.name} fluid/>
                
                   </Col>
                   <Col lg={3} md={12}>
                     <Card className='text-center'>
                       <ListGroup variant='flush'>
                           <ListGroup.Item>
                               <h3>{prods.name}</h3>
                           </ListGroup.Item>
                           <ListGroup.Item>
                              <h5> brand:{prods.brand}</h5>
                           </ListGroup.Item>
                           <ListGroup.Item>
                            <h5>rating : {prods.rating} from {prods.numReviews} Reviewrs</h5> 
                           </ListGroup.Item>
                           <ListGroup.Item>
                              <h5> Price:{prods.price} £</h5>
                           </ListGroup.Item>
                           <ListGroup.Item>
                              <b> Description:{prods.description}</b>
                           </ListGroup.Item>
                       </ListGroup>
                       </Card>
                       </Col>
                       <Col lg={3} md={12}>
                           <Card>
                             <ListGroup variant='flush'>
                                 <ListGroupItem>
                                     <Row>
                                         <Col>
                                         Price:
                                         </Col>
                                       <Col>
                                         <b>₹{prods.price}</b>
                                         </Col>
                                     </Row>
                                 </ListGroupItem>
                                 <ListGroupItem>
                                     <Row>
                                         <Col>
                                         Status:
                                         </Col>
                                       <Col>
                                         {prods.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                                         </Col>
                                     </Row>
                                 </ListGroupItem>
                                 <ListGroupItem className='m-auto'>
                                   <Link to={`/Checkout/${prods._id}`}>
                                     <Button className='rounded btn-block' type='button'disabled={prods.countInStock ===0}>
                                        buy now
                                     </Button>
                                     </Link>
                                 </ListGroupItem>
                             </ListGroup>
                           </Card>
                       </Col>
                   
                </Row>
                </Container>
    </div>
  )
}

export default ProdDescrip