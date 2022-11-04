import React from "react";
import { Card, Button } from 'react-bootstrap'

export const SingleProduct = ({ product }) => {
  return <div className="products">
    <Card style={{ maxWidth: '15rem'}}>
      <Card.Img variant="top" src={product.image} alt={product.name}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          gay
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  </div>;
};
