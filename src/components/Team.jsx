import React, { useState } from "react";
import { Card, Modal, Button } from "react-bootstrap";

const TeamMemberCard = ({ member }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleShow = () => setShowDetails(true);
  const handleClose = () => setShowDetails(false);

  return (
    <>
      <Card onClick={handleShow} style={{ cursor: "pointer" }}>
        <Card.Img variant="top" src={member.image} />
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
      image: "path-to-image.jpg",
    },
    // ... other team members
  ];

  return (
    <div className="team-members">
      {teamMembers.map((member) => (
        <TeamMemberCard key={member.name} member={member} />
      ))}
    </div>
  );
};

export default Team;
