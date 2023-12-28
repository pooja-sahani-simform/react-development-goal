import React from "react";
import { Row, Col } from "react-bootstrap";
import "./AboutUs.scss";

const AboutUs = () => {
  return (
    <Row className="about-us-container">
      <Row className="about-us-wrapper">
        <Col className="content-wrapper">
          <Row>
            <Col className="content-left-wrapper">
              <img
                src={process.env.PUBLIC_URL + "/Fintech/asset/cards.png"}
                className="App-logo"
                alt="logo"
              />
            </Col>
            <Col className="content-right-wrapper">
              <Row className="content-right-container">
                <Col className="content-header">
                  <h1>Simple & fast international payment</h1>
                  <p>
                    Use receiving accounts in a growing number of currencies and
                    get paid like a local. Pay freelancer and customers anywhere
                    in the world straight.
                  </p>
                </Col>
                <Col className="bottom-container">
                  <p className="transfer-text">
                    “Transferring is very easy and super fast. I find the
                    different way from Coca Pay. Perfect payment app for all”
                  </p>
                  <div className="d-flex flex-row align-items-center">
                    <div>
                      <img
                        src={
                          process.env.PUBLIC_URL + "/Fintech/asset/woman1.svg"
                        }
                        alt="logo"
                      />
                    </div>
                    <div className="user-details d-flex justify-content-center flex-column">
                      <h3>Jesica Azalea</h3>
                      <p>Director of Technology, Sans Bothers</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="feature-container">
        <Row className="feature-wrapper">
          <Col className="feature-header">
            <h1>Get started spending with your card in minutes.</h1>
          </Col>
          <Col className="feature-content-wrapper">
            <Row className="feature-content">
              <Col className="feature-sub-content-wrapper">
                <h2>989K</h2>
                <p>Crowdholding accepts a variety of payments.</p>
              </Col>
            </Row>
            <Row className="feature-content">
              <Col className="feature-sub-content-wrapper">
                <h2>89%</h2>
                <p>Payment with us is easy and straight forward</p>
              </Col>
            </Row>
            <Row className="feature-content">
              <Col className="feature-sub-content-wrapper">
                <h2>4583+</h2>
                <p>We accept all major currencies and cryptocurrencies</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Row>
    </Row>
  );
};

export default AboutUs;
