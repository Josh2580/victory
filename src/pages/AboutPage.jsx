import React from "react";

import WhoWeAre from "./../components/WhoWeAre";
import Team from "../components/Team";

const AboutPage = () => {
  return (
    <div className="bg-warning m-0">
      <h3>About Us</h3>
      <WhoWeAre />
      <Team />
    </div>
  );
};

export default AboutPage;
