import React from "react";
import NavbarComp from "./NavbarComp";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import Footer from "./Footer";
import HeroSection from "./HeroSection";

const Root = () => {
  return (
    <div className="w-100  d-flex h-100 flex-column justify-content-between">
      <div>
        <NavbarComp />

        <div className="" style={{ width: "100vw", background: "" }}>
          <Container fluid="lg" className="w-100">
            <Outlet />
          </Container>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Root;
