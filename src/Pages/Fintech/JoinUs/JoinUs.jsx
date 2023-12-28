import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import "./JoinUs.scss";

const JoinUs = () => {
  return (
    <Row className="join-us-container">
      <Row className="feature-data-container">
        <Col className="data-wrapper">
          <Row className="feature-dashboard-container">
            <Col className="data-left-wrapper">
              <Row className="data-left-container">
                <Col className="content-header">
                  <h1>Best ways to send money internationally</h1>
                  <p>
                    Join over 12 million people who choose us for fast and
                    secure online payment method . We are simply & cheaper than
                    banks and non-banks.
                  </p>
                  <div>
                    <Button className="btn--primary--fintech">Join Now</Button>
                    <Button className="learn-more btn--primary--fintech">
                      Learn More
                    </Button>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col className="content-right-wrapper">
              <Row className="content-right-container">
                <Col className="content-header">
                  <div className="image-wrapper">
                    <img
                      src={process.env.PUBLIC_URL + "/Fintech/asset/users.svg"}
                      className="pattern-image"
                      alt="pattern"
                    />
                  </div>
                  <h3>Over 15 million customers</h3>
                  <p>
                    Velit officia consequat duis enim velit mollit. Exercitation
                    veniam consequat sunt nostrud amet.
                  </p>
                </Col>
                <Col className="content-header">
                  <div className="image-wrapper">
                    <img
                      src={process.env.PUBLIC_URL + "/Fintech/asset/bank.svg"}
                      className="pattern-image"
                      alt="pattern"
                    />
                  </div>
                  <h3>Licensed by Bank Wakanda</h3>
                  <p>
                    Amet minim mollit non Exercitation veniam consequat sunt
                    nostrud dummy content.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Row>
  );
};

export default JoinUs;
