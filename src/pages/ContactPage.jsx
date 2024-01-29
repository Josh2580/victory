import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

const ContactPage = () => {
  // Submit handler for the contact form
  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement form submission logic
  };

  return (
    <Container>
      <Row className="my-5">
        <Col md={6}>
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
        <Col md={6}>
          <h2>Our Address</h2>
          <p>1234 Street, City, Country</p>
          <p>Phone: +123456789</p>
          <p>WhatsApp: +123456789</p>
          <p>Email: contact@example.com</p>

          <div className="social-links">
            <a href="#" className="me-2">
              <FaFacebookF />
            </a>
            <a href="#" className="me-2">
              <FaTwitter />
            </a>
            <a href="#" className="me-2">
              <FaInstagram />
            </a>
            <a href="#" className="me-2">
              <FaLinkedinIn />
            </a>
            <a href="#" className="me-2">
              <FaWhatsapp />
            </a>
          </div>
        </Col>
      </Row>

      <Row className="my-5">
        <Col>
          <h2>Find Us</h2>
          <div style={{ height: "400px" }}>
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=Space+Needle,Seattle+WA"
              allowFullScreen
            ></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;
