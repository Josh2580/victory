import React, { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import emailjs from "@emailjs/browser";

const ContactForm = ({ myWidth }) => {
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

    emailjs
      .sendForm("service_7tn9qy9", "template_c0boswq", form.current, {
        publicKey: "__VX_pxa_16sfWwzn",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          notify();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
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
            name="from_user_name"
            id="username"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            id="email"
            name="from_user_email"
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

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Col>
  );
};

export default ContactForm;
