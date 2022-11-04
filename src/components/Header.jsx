import React from "react";
import {
  Container,
  Dropdown,
  FormControl,
  Navbar,
  Badge,
} from "react-bootstrap";
import { HiShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link className="text-decoration-none text-white" to="/">Shopping Cart</Link>
        </Navbar.Brand>
        <Navbar.Text className="search w-50">
          <FormControl placeholder="Search product" />
        </Navbar.Text>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            <HiShoppingCart className="me-2 fs-4" />
            <Badge bg="dark">{10}</Badge>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>Action</Dropdown.Item>
            <Dropdown.Item>Another action</Dropdown.Item>
            <Dropdown.Item>Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Navbar>
  );
}
