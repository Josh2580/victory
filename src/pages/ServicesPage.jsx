import React from "react";
import { Card, Col, Row, Container } from "react-bootstrap";
// import HeroImg from "../assets/hero_img.jpg";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

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
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Eveniet ipsa blanditiis facere fugiat!
          Quasi, eveniet! Perspiciatis consequuntur sunt omnis quasi impedit
          doloribus reprehenderit provident, iste, cupiditate aperiam eum facere
          a.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const ServicesPage = () => {
  const [modalShow, setModalShow] = React.useState(false);

  let style = {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  };
  return (
    <Container fluid="lg" className="">
      <div>
        <h3>Our Services</h3>
        <p className="">
          <span className="fw-bolder">Short Description for sevice page </span>{" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, ea eos
          dolores incidunt voluptatem nesciunt. Amet inventore cum id hic. Quam
          harum, ratione inventore eveniet sunt facilis voluptates nisi esse.
        </p>{" "}
        <Row className="g-4" style={{ maxWidth: "100vw" }}>
          {Array.from({ length: 4 }).map((_, idx) => (
            <Col key={idx} xs={12} sm={4} md={4}>
              <Card onClick={() => setModalShow(true)}>
                {/* <Card.Img variant="top" src={HeroImg} style={style} /> */}
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text as="div">
                    <ul>
                      <li>
                        <h6 className="d-inline">Sub_Title:</h6> Lorem ipsum
                        dolor sit amet consectetur adipisicing elit. Nostrum,
                        error.
                      </li>
                      <li className="text-truncate">
                        <span className="d-inline fw-bolder">Sub_Title:</span>
                        <span>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Suscipit labore qui repellendus?...
                        </span>
                      </li>
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </Container>
  );
};

export default ServicesPage;
