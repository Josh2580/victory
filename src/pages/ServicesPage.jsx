import React from "react";
import { Card, Col, Row, Container } from "react-bootstrap";
import HeroImg from "../assets/hero_img.jpg";

const ServicesPage = () => {
  let style = {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  };
  return (
    <Container fluid="lg" className=" mt-5 pt-4 w-100">
      <h3>Our Services</h3>
      <p className="">
        <span className="fw-bolder">Short Description for sevice page </span>{" "}
        Lorem ipsum dolor sit amet consectetur
      </p>{" "}
      <Row xs={1} className="g-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col key={idx} xs={6} sm={4} md={4}>
            <Card>
              <Card.Img variant="top" src={HeroImg} style={style} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  <ul>
                    <li>
                      <h6 className="d-inline">Sub_Title:</h6> Lorem ipsum dolor
                      sit amet consectetur adipisicing elit. Nostrum, error.
                    </li>
                    <li className="text-truncate">
                      <h6 className="d-inline ">Sub_Title:</h6>
                      <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Suscipit labore qui repellendus?...
                      </span>
                    </li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ServicesPage;
