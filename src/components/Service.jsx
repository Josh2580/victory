import React, { useState } from "react";
import { Card, Row, Col, Modal, Button } from "react-bootstrap";
import EcommerceImg from "../assets/ecommerce.png";
import GraphicImg from "../assets/graphic-designer.png";
import UiUxImg from "../assets/UI.png";
import WebDevImg from "../assets/web-dev.jpeg";
import BrandImg from "../assets/branding.png";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.data.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* <h4>Centered Modal</h4> */}

        {props.data.sub &&
          props.data.sub.map((val, idx) => (
            <p key={idx}>
              <strong>{val.subHead}:</strong> {val.details}
            </p>
          ))}
        {props.data.others &&
          props.data.others.map((val, idx) => (
            <p key={idx}>
              <strong>{val.subHead}:</strong> {val.details}
            </p>
          ))}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const Service = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [serviceID, setServiceID] = useState(1);

  let style = {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  };

  const portfolios = [
    {
      id: 1,
      title: "Graphics Design",
      sub: [
        {
          id: 1,
          subHead: "Digital Design",

          details:
            "Creating visuals for digital platforms, including social media graphics and online advertisements",
        },
        {
          id: 2,
          subHead: "Print Design",

          details:
            "Designing materials for print, such as brochures, posters, and business cards",
        },
      ],
      others: [
        {
          id: 1,
          subHead: "Illustration",
          details:
            "Developing hand-drawn or digitally created illustrations for various purposes.",
        },
        {
          id: 2,
          subHead: "Layout Design",

          details:
            "Structuring and arranging visual elements for magazines, books, and other publications",
        },
        {
          id: 3,
          subHead: "Packaging Design",

          details: "Designing the visual appearance of product packaging",
        },
        {
          id: 4,
          subHead: "Typography",

          details:
            "Working with fonts and text to enhance visual communication",
        },
      ],
      ImgUrl: GraphicImg,
    },
    {
      id: 2,
      title: "Branding",
      sub: [
        {
          id: 1,
          subHead: "Brand Identity Design",

          details:
            "Developing the visual elements that represent a brand, including logos, color schemes, and typography",
        },
        {
          id: 2,
          subHead: "Brand Strategy",

          details:
            "Crafting a comprehensive plan that outlines the brand's values, messaging, and positioning",
        },
      ],
      others: [
        {
          id: 1,
          subHead: "Brand Guidelines",
          details:
            "Creating a set of rules and standards for how the brand's visual elements should be used across various platforms",
        },
        {
          id: 2,
          subHead: "Packaging Design",

          details:
            "Designing the visual appearance of product packaging to align with the brand identity",
        },
        {
          id: 3,
          subHead: "Brand Collateral",

          details:
            "Designing various materials that support the brand, such as business cards, letterheads, and promotional materials",
        },
        {
          id: 4,
          subHead: "Brand Communication",

          details:
            "Ensuring consistency in how the brand communicates visually across different mediums",
        },
      ],
      ImgUrl: BrandImg,
    },
    {
      id: 3,
      title: "Web Development",
      sub: [
        {
          id: 1,
          subHead: "Frontend Development",
          details:
            "Writing code to create the visual elements and user interface of a website that users interact with.",
        },
        {
          id: 2,
          subHead: "Backend Development",

          details:
            "Building the server-side logic and database functionality that supports the frontend of a website.",
        },
      ],
      others: [
        {
          id: 1,
          subHead: "Full-Stack Development",
          details:
            "Involves both frontend and backend development, covering the entire spectrum of web development.",
        },
        {
          id: 2,
          subHead: "Responsive Web Design ",

          details:
            "Ensuring that websites adapt and function well on various devices and screen sizes.",
        },
        {
          id: 3,
          subHead: "Web Security",

          details:
            "Implementing measures to protect websites and user data from security threats.",
        },
        {
          id: 4,
          subHead: "Content Management Systems (CMS)",

          details:
            "Working with platforms that allow users to easily manage and update website content",
        },
      ],

      ImgUrl: WebDevImg,
    },
    {
      id: 4,
      title: "UI / UX",
      sub: [
        {
          id: 1,
          subHead: "User Interface (UI) Design",

          details:
            "Creating the visual elements of a digital interface, such as buttons, icons, and layout",
        },
        {
          id: 2,
          subHead: "User Experience (UX) Design",

          details:
            "Focusing on the overall experience of users, including usability, accessibility, and user flow.",
        },
      ],
      others: [
        {
          id: 1,
          subHead: "Interaction Design",
          details:
            "Designing how users interact with the interface, including animations and transitions.",
        },
        {
          id: 2,
          subHead: "Information Architecture",

          details:
            "Organizing and structuring content to optimize user navigation and understanding.",
        },
        {
          id: 3,
          subHead: "Wireframing and Prototyping",

          details:
            "Creating low-fidelity sketches or interactive prototypes to visualize and test design concepts.",
        },
        {
          id: 4,
          subHead: "Usability Testing",

          details:
            "Evaluating the design's effectiveness through user testing and feedback.",
        },
      ],

      ImgUrl: UiUxImg,
    },
    {
      id: 5,
      title: "Ecommerce Solutions",
      sub: [
        {
          id: 1,
          subHead: "E-commerce Platform Development",

          details:
            "Building and customizing online store platforms to suit specific business needs.",
        },
        {
          id: 2,
          subHead: "Shopping Cart Integration",

          details:
            "Implementing and customizing shopping cart functionality for seamless purchase experiences.",
        },
      ],
      others: [
        {
          id: 1,
          subHead: "Payment Gateway Integration",
          details:
            "Setting up secure payment processing systems that support various payment methods.",
        },
        {
          id: 2,
          subHead: "Product Management Systems",

          details:
            "Creating systems for managing product listings, inventory, and pricing updates efficiently.",
        },
        {
          id: 3,
          subHead: "E-commerce Analytics",

          details:
            "Implementing tools to track and analyze customer behavior, sales trends, and website performance to inform business strategies.",
        },
        {
          id: 4,
          subHead: "Mobile Commerce",

          details:
            "Optimizing e-commerce websites for mobile devices or developing dedicated mobile shopping apps.",
        },
      ],
      ImgUrl: EcommerceImg,
    },
  ];

  const found = portfolios.find((val) => val.id == serviceID);

  const ClickHandler = (data) => {
    setModalShow(true);
    setServiceID(data.id);
    // console.log(data);
  };

  return (
    <>
      <Row className="g-4" style={{ maxWidth: "100vw" }}>
        {/* {Array.from({ length: 4 }).map((_, idx) => ( */}
        {portfolios.map((data, idx) => (
          <Col key={idx} xs={12} sm={4} md={4}>
            <Card onClick={() => ClickHandler(data)}>
              <Card.Img variant="top" src={data.ImgUrl} style={style} />
              <Card.Body>
                <Card.Title>{data.title}:</Card.Title>
                <Card.Text as="div" className="">
                  {data.sub.map((val, idx) => (
                    <p
                      key={idx}
                      style={{ fontSize: "13px", color: "#2d2d2d" }}
                      className=" text-truncate p-0 m-0 "
                    >
                      <strong>{val.subHead}: </strong>
                      {val.details}
                    </p>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <MyVerticallyCenteredModal
        data={found}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default Service;
