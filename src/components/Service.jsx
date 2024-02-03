import React from "react";
import { Card, Row, Col, Modal, Button } from "react-bootstrap";
import ServiceImg from "../assets/team_img.jpg";
import EcommerceImg from "../assets/ecommerce_mockup.png";

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

const Service = () => {
  const [modalShow, setModalShow] = React.useState(false);

  let style = {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  };

  const portfolios = [
    {
      id: 1,
      title: "Web Development",
      sub: [
        {
          id: 1,
          details:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, error.",
        },
        {
          id: 2,
          details:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit labore qui repellendus?...",
        },
      ],
      ImgUrl: EcommerceImg,
    },
  ];
  return (
    <>
      <h3 className="text-center my-4">Our Services</h3>
      <Row className="g-4" style={{ maxWidth: "100vw" }}>
        {/* {Array.from({ length: 4 }).map((_, idx) => ( */}
        {portfolios.map((data, idx) => (
          <Col key={idx} xs={12} sm={4} md={4}>
            <Card onClick={() => setModalShow(true)}>
              <Card.Img variant="top" src={data.ImgUrl} style={style} />
              <Card.Body>
                <Card.Title>{data.title}:</Card.Title>
                <Card.Text as="div">
                  <ul>
                    {data.sub.map((val, idx) => (
                      <li>
                        <h6 className="d-inline">Sub_Title: {val.details}</h6>
                      </li>
                    ))}
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default Service;
