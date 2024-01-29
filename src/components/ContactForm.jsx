import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

const ContactForm = ({ myWidth }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement form submission logic
  };
  return (
    <Col md={myWidth}>
      <h2>Contact Us</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} required />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Col>
  );
};

export default ContactForm;
