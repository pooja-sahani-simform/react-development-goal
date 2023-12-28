import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import "./Contact.scss";

const Contact = () => {
  return (
    <Row className="contact-wrapper">
      <Col className="content-header">
        <Col>
          <h1>Contact us today and let us know what you need</h1>
          <p>
            When does a mere internet 'SEO' company grow into a trusted partner
            that stays in front of the latest industry trends? When it's time to
            partner with Mocer, that's when.
          </p>
        </Col>
        <Col className="button-wrapper">
          <Button className="btn--primary">Contact With Us</Button>
        </Col>
        {/* <Col>
          <img
            className="play-image"
            src={process.env.PUBLIC_URL + "woman-laugh.png"}
            alt="logo image"
          />
        </Col> */}
      </Col>
    </Row>
  );
};

export default Contact;
