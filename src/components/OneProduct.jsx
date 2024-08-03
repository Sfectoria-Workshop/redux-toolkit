import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const OneProduct = ({ product, addToCart }) => {
  return (
    <Card style={{ width: '18rem', height:'25rem' }} className='d-flex flex-column justify-content-between'>
      <Card.Img variant="top" src={product.image} style={{height: '200px'}}/>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          {product.description}
          <br />
          {product.price}
        </Card.Text>
      </Card.Body>
      <Button variant="outline-danger text-dark" onClick={() => addToCart(product)}>Add To Cart</Button>
    </Card>
  );
}

export default OneProduct;