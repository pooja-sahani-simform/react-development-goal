import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import "./Footer.scss";

const Footer = () => {
  return (
    <Row className="footer-wrapper">
      <Col className="header-container">
        <h1>Ready to get started ?</h1>
        <p>
          If there are questions you want to ask, we will answer all your
          question
        </p>
        <div className="input-wraper">
          <input type="email" placeholder="Enter your email" />
          <Button className="btn--primary">Join now</Button>
        </div>
      </Col>
      <Col className="header-right-container">
        <h1>Maybe your question is have been answered, check this out.</h1>
        <div className="list-item">
          <p>What is Coca Soft</p>
          <img
            className="action-image"
            src={process.env.PUBLIC_URL + "/team/plus.svg"}
            alt="action image"
          />
        </div>
        <hr />
        <div className="list-item">
          <p>How can I get service from Coca Soft</p>
          <img
            className="action-image"
            src={process.env.PUBLIC_URL + "/team/plus.svg"}
            alt="action image"
          />
        </div>
        <hr />
        <div className="list-item">
          <p>What kind of service will I get</p>
          <img
            className="action-image"
            src={process.env.PUBLIC_URL + "/team/plus.svg"}
            alt="action image"
          />
        </div>
      </Col>
      <hr className="footer-line" />
      <Col className="footer-content-container">
        <Row className="menu-wrapper">
          <Col className="social-icons-wrapper">
            <img
              className="social-image"
              src={process.env.PUBLIC_URL + "/social/facebook.svg"}
              alt="social image"
            />
            <img
              className="social-image"
              src={process.env.PUBLIC_URL + "/social/twitter.svg"}
              alt="social image"
            />
            <img
              className="social-image"
              src={process.env.PUBLIC_URL + "/social/instagram.svg"}
              alt="social image"
            />
            <img
              className="social-image"
              src={process.env.PUBLIC_URL + "/social/linkdin.svg"}
              alt="social image"
            />
          </Col>
          <Col className="policy-wrapper">
            <p>Privacy Policy</p> <p>Terms & Conditions</p> <p>Support</p>
          </Col>
        </Row>
        <Row>
          <Col>© Coca All Rights Reserved</Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Footer;
