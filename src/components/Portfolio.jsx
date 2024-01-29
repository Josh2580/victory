import React from "react";
import { Card, Row, Col, Container, Button } from "react-bootstrap";
import PortImg from "../assets/team_img.jpg";

let style = {
  width: "100%",
  height: "200px",
  objectFit: "cover",
};

const PortfolioCard = ({ title, category, imageUrl, description }) => (
  <Card className="h-100">
    <Card.Img variant="top" src={imageUrl} style={style} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{category}</Card.Subtitle>
      <Card.Text>{description}</Card.Text>
      <Button variant="primary">View Details</Button>
    </Card.Body>
  </Card>
);

const Portfolio = () => {
  const portfolioItems = [
    {
      title: "Website Design",
      category: "Websites",
      imageUrl: PortImg,
      description: "A modern and responsive website design.",
    },
    {
      title: "Corporate Logo",
      category: "Logos",
      imageUrl: PortImg,
      description: "Logo designed for a corporate client.",
    },
    {
      title: "Marketing Graphics",
      category: "Graphics",
      imageUrl: PortImg,
      description: "Creative graphics for marketing campaigns.",
    },
    // Add more portfolio items as needed
  ];

  return (
    <Container>
      <h2 className="text-center my-4">Our Portfolio</h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {portfolioItems.map((item, idx) => (
          <Col key={idx}>
            <PortfolioCard {...item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Portfolio;
