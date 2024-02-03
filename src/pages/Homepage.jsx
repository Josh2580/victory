import React from "react";
import HeroSection from "../components/HeroSection";
import { Container, Col, Row } from "react-bootstrap";
import WhoWeAre from "./../components/WhoWeAre";
import ContactForm from "../components/ContactForm";
import Service from "../components/Service";
import Portfolio from "../components/Portfolio";

function Homepage() {
  return (
    <div className="d-flex flex-column gap-5">
      <HeroSection />
      <Container fluid="lg" className="d-flex flex-column gap-4 ">
        <WhoWeAre />
        <Service />
        <Portfolio />
        <ContactForm myWidth={12} />
      </Container>
    </div>
  );
}

export default Homepage;
