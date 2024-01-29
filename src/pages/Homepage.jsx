import React from "react";
import HeroSection from "../components/HeroSection";
import { Container, Col, Row } from "react-bootstrap";
import WhoWeAre from "./../components/WhoWeAre";
import ContactForm from "../components/ContactForm";
import Service from "../components/Service";

function Homepage() {
  return (
    <>
      <HeroSection />
      <WhoWeAre />
      <Service />
      <ContactForm myWidth={12} />
    </>
  );
}

export default Homepage;
