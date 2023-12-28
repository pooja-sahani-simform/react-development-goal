import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import "./Feature.scss";

const Feature = () => {
  return (
    <Row className="feature-container">
    <Row className="feature-wrapper">
      <Col className="feature-header">
        <h1>Awesome Features Optimizing Your Website</h1>
      </Col>
      <Col className="feature-content-wrapper">
        <Row className="feature-content-1">
          <Col className="icon-wrapper">
            <img
              className="logo-image"
              src={process.env.PUBLIC_URL + "/logo/cart.svg"}
              alt="logo image"
            />
          </Col>
          <Col className="feature-sub-content-wrapper">
            <h2>Improving UX with A/B</h2>
            <p>
              A/B testing is useful when you're launching something new or
              if you already have a large audience.
            </p>
          </Col>
        </Row>
        <Row className="feature-content-1 feature-content-2">
          <Col className="icon-wrapper">
            <img
              className="logo-image"
              src={process.env.PUBLIC_URL + "/logo/setting.svg"}
              alt="logo image"
            />
          </Col>
          <Col className="feature-sub-content-wrapper">
            <h2>Optimize Page Content</h2>
            <p>
              Great content relies on relevance. Any blog post, video you
              create should focus on your target market.
            </p>
          </Col>
        </Row>
        <Row className="feature-content-1">
          <Col className="icon-wrapper">
            <img
              className="logo-image"
              src={process.env.PUBLIC_URL + "/logo/cloud.svg"}
              alt="logo image"
            />
          </Col>
          <Col className="feature-sub-content-wrapper">
            <h2>Build Seamless Experience</h2>
            <p>
              Optimize your website for all devices, not just desktops. This
              is especially true of mobile devices.
            </p>
          </Col>
        </Row>
      </Col>
    </Row>
  </Row>
  );
};

export default Feature;
