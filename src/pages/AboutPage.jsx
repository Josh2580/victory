import React from "react";
import { Container } from "react-bootstrap";

import WhoWeAre from "./../components/WhoWeAre";
import Team from "../components/Team";
import How from "../components/How";
import Mission from "../components/Mission";
import Vission from "../components/Vission";
import Values from "../components/Values";

const AboutPage = () => {
  return (
    <Container fluid="lg" className="my-4">
      {/* <h3>About Us</h3> */}
      <WhoWeAre />
      {/* <Team /> */}
      <Mission />
      <How />
      <Values />
      <Vission />
    </Container>
  );
};

export default AboutPage;
