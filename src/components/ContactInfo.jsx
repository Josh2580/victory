import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

const ContactInfo = () => {
  return (
    <Col md={6}>
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
  );
};

export default ContactInfo;
