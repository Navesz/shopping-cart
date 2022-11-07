import React from "react";
import { Card, Button, Col } from "react-bootstrap";
import { CartState } from "../context/Context";
import Rating from "./Rating";

export const SingleProduct = ({ product }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <Col className="p-0">
      <Card
        style={{
          minWidth: "12rem",
          height: "100%",
        }}
      >
        <Card.Img variant="top" src={product.image} alt={product.name} />
        <Card.Body className="d-flex flex-column justify-content-between">
          <Card.Title>{product.name}</Card.Title>
          <Card.Subtitle className="pb-3">
            <span> R${product.price.split(".")[0]} </span>
            {product.fastDelivery ? (
              <div>Fast Delivery</div>
            ) : (
              <div>4 days delivery</div>
            )}
            <Rating rating={product.ratings} />
          </Card.Subtitle>
          {cart.some((p) => p.id === product.id) ? (
            <Button onClick={() => {
              dispatch({
                type: 'REMOVE_FROM_CART',
                payload: product
              })
            }} variant="danger">Remove from cart</Button>
          ) : (
            <Button onClick={() => {
              dispatch({
                type: 'ADD_TO_CART',
                payload: product
              })
            }} disabled={!product.inStock} variant="primary">
              {product.inStock ? "Add to Cart" : "Out of Stock"}
            </Button>
          )}
        </Card.Body>
      </Card>
    </Col>
  );
};
