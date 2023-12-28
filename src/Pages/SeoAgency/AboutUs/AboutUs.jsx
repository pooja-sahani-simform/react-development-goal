import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import "./AboutUs.scss";

const AboutUs = () => {
  return (
    <Row className="about-container">
      <Col className="about-wrapper">
        <Col className="image-container">
          <img
            className="logo-image"
            src={process.env.PUBLIC_URL + "about-us.png"}
            alt="logo image"
          />
          <img
            className="play-image"
            src={process.env.PUBLIC_URL + "/social/play.svg"}
            alt="logo image"
          />
          <div className="graph-box">
            <h3>Overview</h3>
          </div>
        </Col>
        <Col className="about-content-wrapper">
          <Row className="about-header">
            <Col className="content">
              <h1>Make Your Website More User-Friendly for Search Engines</h1>
              <p>
                We'll match you with our team of expert strategists who will
                make sure your top-of-the-line strategies are always on target.
                Contact us today to get started!
              </p>
            </Col>
          </Row>
          <Row className="index-content">
            <Col>
              <h1>120K </h1>
              <p>Domains Indexed</p>
            </Col>
            <Col>
              <h1>8.990 </h1>
              <p>Project Done</p>
            </Col>
          </Row>
        </Col>
      </Col>
    </Row>
  );
};

export default AboutUs;
