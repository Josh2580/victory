import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";

const ContactPage = () => {
  // Submit handler for the contact form
  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement form submission logic
  };

  return (
    <Container fluid="lg">
      <Row className="my-5 d-flex flex-column g-4">
        <ContactForm myWidth={6} />
        <ContactInfo />
      </Row>

      <Row className="my-5">
        {/* <Col>
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
        </Col> */}
      </Row>
    </Container>
  );
};

export default ContactPage;
