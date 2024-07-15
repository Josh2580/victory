import React from "react";
import HeroSection from "../components/HeroSection";
import { Container, Row } from "react-bootstrap";
import WhoWeAre from "./../components/WhoWeAre";
import ContactForm from "../components/ContactForm";
import Service from "../components/Service";
import Portfolio from "../components/Portfolio";

function Homepage() {
  return (
    <div className="d-flex flex-column bg-light gap-5">
      <HeroSection />
      <Container fluid="lg" className="d-flex flex-column gap-4 ">
        <WhoWeAre />
        <div>
          <h3 className="text-center pb-3">Our Service</h3>
          <Service />
        </div>
      </Container>
      <div
      // style={{
      //   backgroundImage: `url(${PortImg})`,
      //   filter: "grayscale(50%)",
      // }}
      >
        <Container>
          <Portfolio />
        </Container>
      </div>

      <Container fluid="lg" id="home_contact">
        <Row className="my-3">
          <ContactForm myWidth={6} />
          {/* <ContactInfo /> */}
        </Row>
      </Container>
    </div>
  );
}

export default Homepage;
