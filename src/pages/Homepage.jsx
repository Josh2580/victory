import React from "react";
import HeroSection from "../components/HeroSection";
import { Container, Col, Row } from "react-bootstrap";
import WhoWeAre from "./../components/WhoWeAre";
import ContactForm from "../components/ContactForm";
import Service from "../components/Service";
import Portfolio from "../components/Portfolio";
import ContactInfo from "../components/ContactInfo";

function Homepage() {
  return (
    <div className="d-flex flex-column gap-5">
      <HeroSection />
      <Container fluid="lg" className="d-flex flex-column gap-4 ">
        <WhoWeAre />
        <Service />
        <Portfolio />
        <Row>
          <ContactForm myWidth={6} />
          <div className=" my-3 mt-md-0">
            <ContactInfo />
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default Homepage;
