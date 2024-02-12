import React from "react";
import { Card, Row, Col, Container, Button } from "react-bootstrap";
import PortImg from "../assets/team_img.jpg";
import EcommerceImg from "../assets/ecommerce_mockup.png";
import WinoshImg from "../assets/winosh_mockup.png";
import BannerImg from "../assets/banner.png";
import BookImg from "../assets/book_cover.jpg";

let style = {
  width: "100%",
  height: "200px",
  objectFit: "cover",
};

const VisitHandler = (webUrl) => {
  // window.location.href = "https://www.example.com";
  {
    webUrl && (window.location.href = webUrl);
  }
};

const PortfolioCard = ({ title, webUrl, imageUrl, description }) => (
  <Card className="h-100" onClick={() => VisitHandler(webUrl)}>
    <Card.Img variant="top" src={imageUrl} style={style} />
    <Card.Body>
      {/* <Card.Title>{title}</Card.Title> */}
      <Card.Subtitle className="mb-2 text-muted">{title}</Card.Subtitle>
      <Card.Text style={{ fontSize: "14px", lineHeight: "16px" }}>
        {description}
      </Card.Text>
      {/* <Button variant="primary">View Details</Button> */}
    </Card.Body>
  </Card>
);

const Portfolio = () => {
  const portfolioItems = [
    {
      title: "Ecommerce Website",
      category: "Website",
      imageUrl: EcommerceImg,
      description:
        "A business website with checkout process and methods of payment.",
      webUrl: "https://joshecommerce.netlify.app/",
    },
    {
      title: "Informative Website",
      category: "Website",
      imageUrl: WinoshImg,
      description: "An Informative modern and responsive website design.",
      webUrl: "https://winosh.com.ng/",
    },
    {
      title: "Portfolio Website",
      category: "Website",
      imageUrl: WinoshImg,
      description: "An Informative modern and responsive website design.",
      webUrl: "https://jochuks.netlify.app/",
    },
    {
      title: "Book Cover Design",
      category: "Graphics",
      imageUrl: BookImg,

      description: "Creative graphics for marketing campaigns.",
    },
    {
      title: "Business Bill Design",
      category: "Graphics",
      imageUrl: BannerImg,
      description: "Creative graphics for marketing campaigns.",
    },
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
