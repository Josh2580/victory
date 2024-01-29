import React from "react";
import HeroSection from "../components/HeroSection";
import { Container, Col, Row } from "react-bootstrap";
import WhoWeAre from "./../components/WhoWeAre";

function Homepage() {
  return (
    <>
      <HeroSection />

      <WhoWeAre />
    </>
  );
}

export default Homepage;
