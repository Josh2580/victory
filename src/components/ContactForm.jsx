import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  Spinner,
} from "react-bootstrap";
import emailjs from "@emailjs/browser";

const ContactForm = ({ myWidth }) => {
  const [sending, setSending] = useState(false);
  const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_7tn9qy9",
  //       "",
  //       form.current,
  //       ""
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  //   e.target.reset();
  // };

  const sendEmail = (e) => {
    e.preventDefault();
    const notify = () => toast("Message sent");
    setSending(true);

    emailjs
      .sendForm("service_9z9pck2", "template_aj1mdut", form.current, {
        publicKey: "R48oDaG-VEisbDb8L",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          notify();
          setSending(false);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setSending(false);
        }
      );
    // e.target.reset();
  };
  return (
    <Col md={myWidth}>
      <h2 className="text-center">Contact Us</h2>
      <ToastContainer />
      <Form ref={form} onSubmit={sendEmail}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            name="user_name"
            id="username"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            id="email"
            name="user_email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            id="message"
            rows={3}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" disabled={sending}>
          {sending && (
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
          )}
          Submit
        </Button>
      </Form>
    </Col>
  );
};

export default ContactForm;
