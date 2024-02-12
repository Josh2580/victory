import React, { useRef } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

const ContactForm = ({ myWidth }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_iygmfpb",
        "template_7otzy8y",
        form.current,
        "__VX_pxa_16sfWwzn"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement form submission logic
  };
  return (
    <Col md={myWidth}>
      <h2 className="text-center">Contact Us</h2>
      <Form ref={form} onSubmit={sendEmail}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            name="user_name"
            id="username"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            id="email"
            name="user_email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            id="message"
            rows={3}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Col>
  );
};

export default ContactForm;
