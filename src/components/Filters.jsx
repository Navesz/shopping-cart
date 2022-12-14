import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Rating from './Rating'

export const Filters = () => {

  const [rate, setRate] = useState(2)

  return (
    <div className="filters">
      <span className="title">Filter Products</span>
      <span>
        <Form.Check
          inline
          label="Ascending"
          name="group1"
          type="radio"
          id={"inline-1"}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Descending"
          name="group1"
          type="radio"
          id={"inline-2"}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Include Out of Stock"
          name="group1"
          type="checkbox"
          id={"inline-3"}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Fast Delivery Only"
          name="group1"
          type="checkbox"
          id={"inline-4"}
        />
      </span>
      <span>
        <label className="me-2">Rating: </label>
        <Rating rating={rate} onClick={(index) => setRate(index + 1)} /> 
      </span>
      <Button variant='dark'>Clear Filters</Button>
    </div>
  );
};
