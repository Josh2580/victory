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
      <h3>Our Address</h3>
      <p>02 Mike Street, New NY, Abuja</p>
      <p>WhatsApp: +2349038348397</p>
      <p>Phone: +2347065704850</p>
      <p>Email: Jechify@gmail.com</p>

      <div className="social-links">
        {/* <a href="#" target="_blank" className="me-2">
          <FaFacebookF />
        </a> */}
        <a href="https://x.com/Joshua06725663" target="_blank" className="me-2">
          <FaTwitter />
        </a>
        {/* <a href="#" target="_blank" className="me-2">
          <FaInstagram />
        </a> */}
        <a
          href="https://www.linkedin.com/in/joshucan"
          target="_blank"
          className="me-2"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://wa.me/+2349038348397?text=Hi"
          target="_blank"
          className="me-2"
        >
          <FaWhatsapp />
        </a>
      </div>
    </Col>
  );
};

export default ContactInfo;
