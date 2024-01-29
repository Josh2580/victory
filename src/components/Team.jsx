import React, { useState } from "react";
import { Card, Modal, Button, Row, Col } from "react-bootstrap";
import TeamImg from "../assets/team_img.jpg";

const TeamMemberCard = ({ member }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleShow = () => setShowDetails(true);
  const handleClose = () => setShowDetails(false);

  return (
    <>
      <Card onClick={handleShow} style={{ cursor: "pointer" }}>
        <Card.Img
          variant="top"
          src={member.image}
          style={{
            width: "100%",
            maxHeight: "200px",
            // width: "100%",
            // height: "auto",
            // aspectRatio: "1 / 1",
            // borderRadius: "50%",
            objectFit: "cover",
          }}
        />
        <Card.Body>
          <Card.Title>{member.name}</Card.Title>
          <Card.Text>{member.position}</Card.Text>
        </Card.Body>
      </Card>

      <Modal show={showDetails} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{member.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            <strong>Position:</strong> {member.position}
          </p>
          <p>
            <strong>About:</strong> {member.about}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

const Team = () => {
  const teamMembers = [
    {
      name: "John Doe",
      position: "Software Engineer",
      about: "John has over 10 years of experience in software development...",
      image: TeamImg,
    },
    {
      name: "John Doe",
      position: "Software Engineer",
      about: "John has over 10 years of experience in software development...",
      image: TeamImg,
    },
    {
      name: "John Doe",
      position: "Software Engineer",
      about: "John has over 10 years of experience in software development...",
      image: TeamImg,
    },
    {
      name: "John Doe",
      position: "Software Engineer",
      about: "John has over 10 years of experience in software development...",
      image: TeamImg,
    },
    // ... other team members
  ];

  return (
    <Row xs={1} sm={2} md={3} lg={4} className="g-5">
      {teamMembers.map((member, idx) => (
        <Col key={idx}>
          <TeamMemberCard member={member} />
        </Col>
      ))}
    </Row>
  );
};

export default Team;
