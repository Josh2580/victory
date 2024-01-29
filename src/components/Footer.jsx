import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5 mt-md-3">
      <Container>
        <Row>
          <Col lg={4} md={6} sm={12} className="text-left text-sm-center">
            <h6 className="small">Contact Us</h6>
            <div className="d-flex flex-column gap-1 fs-6">
              <span className="small">Email: jochuks10@gmail.com</span>
              <span className="small">Phone: +234 706 570-4850</span>
            </div>
          </Col>
          <Col lg={4} md={6} className="text-left text-sm-center mt-3 mt-lg-0">
            <h6 className="small">Follow Us</h6>
            <div className="social-icons d-flex justify-content-sm-center gap-2">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </div>
          </Col>
        </Row>
        <hr className="my-3" />
        <Row>
          <Col>
            <p className="text-center small ">
              &copy; 2023 Your Company. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
