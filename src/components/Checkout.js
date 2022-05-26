import React , {useState} from 'react'
import { useParams } from 'react-router'
import {Link} from 'react-router-dom'
import {Container,Row,Col,Button,ListGroup,ListGroupItem,Image} from 'react-bootstrap';

import products from './ProdData';

const Checkout = () => {
  const [count, setCount] = useState(1);

  const params = useParams();
  const prods = products.find((prods)=>prods._id===params.id);
  return (
    <div>
  <Container className='my-3'>
             
             <Row>
                <Col className='py-3' style={{border :'1px solid #eee' }} md={3} >
                    <Image src={prods.image} fluid />
                </Col>
                <Col className='text-center py-5' style={{border :'1px solid #eeee'}} md={2} >
                  <h4>{prods.name}</h4>
                </Col>
                <Col className='text-center py-5' style={{border :'1px solid #eeee  ' }} md={2} >
                   <ListGroup>
                       <ListGroupItem>
                       <h3>{prods.price} £</h3>
                       </ListGroupItem>
                       
                       <ListGroupItem>
                           <h4>Rating</h4>
                       <h5>{prods.rating} from {prods.numReviews}</h5>
                       </ListGroupItem>
                   </ListGroup>
                    
                    </Col>
                    <Col className='text-center py-5' style={{border :'1px solid #eeee' }} md={2}>
                        <h5 className='my-4'>Select Qty </h5>
                 <Button size='sm' onClick={()=>setCount( count - 1)} disabled={count === 1}>-</Button>
                    <Button size='sm'>{count}</Button>
                    <Button  size='sm' onClick={()=>setCount( count + 1)}   disabled={count === prods.countInStock }>+</Button>
                   
                    </Col>
                    <Col className='text-center py-5' style={{border :'1px solid #eeee'}} md={3}>
                   
                   
                 <h5>Total :  {count * prods.price} £</h5>
                 
                    <Link to='/Address'><Button className="btn-block mt-5" >Check Out</Button></Link>
                   </Col>
                    
             </Row>
         </Container>
    </div>
  )
}

export default Checkout