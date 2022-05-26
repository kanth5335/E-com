import React from 'react'
import products from './ProdData'
import AppBar from './AppBar'
import {Row,Col,Container} from 'react-bootstrap'
import ProductPage from './ProductPage'


const Home = () => {
  return (
    <div>
      <AppBar/>
        <h1 className='text-center m-3'>LATEST PRODUCTS</h1>
<Row>

{products.map(prods=>(
    <Col lg={3} md={6} sm={12}>

<ProductPage prods={prods}/>

    </Col>
   ) )}

</Row>

    </div>
  )
}

export default Home