import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import "./FAQ.scss";

const FAQ = () => {
  return (
    <Row className="FAQ-container">
      <Row className="FAQ-wrapper">
        <Col className="FAQ-header">
          <h1>Awesome Features Optimizing Your Website</h1>
        </Col>
        <Col className="feature-content-wrapper">
          <Row className="feature-content-row">
            <Col className="feature-sub-content-wrapper">
              <div className="content-wrapper">
                <h2>1. Why You Need SEO Optimization</h2>
                <p>
                  When does a mere internet 'SEO' company grow into a trusted
                  partner that stays in front of the latest industry trends?
                  When it's time to partner with Mocer, that's when.
                </p>
              </div>
              <div>
                <img
                  className="action-image"
                  src={process.env.PUBLIC_URL + "/team/minus.svg"}
                  alt="action image"
                />
              </div>
            </Col>
          </Row>
          <Row className="feature-content-row">
            <Col className="feature-sub-content-wrapper">
              <div className="content-wrapper">
                <h2>2. The Benefits of SEO Optimization</h2>
                {/* <p>
                When does a mere internet 'SEO' company grow into a trusted
                partner that stays in front of the latest industry trends?
                When it's time to partner with Mocer, that's when.
              </p> */}
              </div>
              <div>
                <img
                  className="action-image"
                  src={process.env.PUBLIC_URL + "/team/plus.svg"}
                  alt="action image"
                />
              </div>
            </Col>
          </Row>
          <Row className="feature-content-row">
            <Col className="feature-sub-content-wrapper">
              <div className="content-wrapper">
                <h2>3. How to Get Started with SEO Optimization</h2>
                {/* <p>
                When does a mere internet 'SEO' company grow into a trusted
                partner that stays in front of the latest industry trends?
                When it's time to partner with Mocer, that's when.
              </p> */}
              </div>
              <div>
                <img
                  className="action-image"
                  src={process.env.PUBLIC_URL + "/team/plus.svg"}
                  alt="action image"
                />
              </div>
            </Col>
          </Row>
          <Row className="feature-content-row">
            <Col className="feature-sub-content-wrapper">
              <div className="content-wrapper">
                <h2>4. How to Get Your Business Ready for SEO Optimization</h2>
                {/* <p>
                When does a mere internet 'SEO' company grow into a trusted
                partner that stays in front of the latest industry trends?
                When it's time to partner with Mocer, that's when.
              </p> */}
              </div>
              <div>
                <img
                  className="action-image"
                  src={process.env.PUBLIC_URL + "/team/plus.svg"}
                  alt="action image"
                />
              </div>
            </Col>
          </Row>
          <Row className="feature-content-row">
            <Col className="feature-sub-content-wrapper">
              <div className="content-wrapper">
                <h2>5. What is a Meta Description?</h2>
                {/* <p>
                When does a mere internet 'SEO' company grow into a trusted
                partner that stays in front of the latest industry trends?
                When it's time to partner with Mocer, that's when.
              </p> */}
              </div>
              <div>
                <img
                  className="action-image"
                  src={process.env.PUBLIC_URL + "/team/plus.svg"}
                  alt="action image"
                />
              </div>
            </Col>
          </Row>
          <Row className="feature-content-row">
            <Col className="feature-sub-content-wrapper">
              <div className="content-wrapper">
                <h2>6. How to Write a Meta Description</h2>
                {/* <p>
                When does a mere internet 'SEO' company grow into a trusted
                partner that stays in front of the latest industry trends?
                When it's time to partner with Mocer, that's when.
              </p> */}
              </div>
              <div>
                <img
                  className="action-image"
                  src={process.env.PUBLIC_URL + "/team/plus.svg"}
                  alt="action image"
                />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Row>
  );
};

export default FAQ;
