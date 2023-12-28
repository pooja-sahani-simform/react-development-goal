import React from "react";
import { Row, Col } from "react-bootstrap";
import "./Feature2.scss";

const Feature2 = () => {
  return (
    <Row className="feature-container-3">
      <Row className="feature-data-container">
        <Col className="data-wrapper">
          <Row className="feature-dashboard-container">
            <Col className="data-left-wrapper">
              <Row className="data-left-container">
                <Col className="content-header">
                  <h1>Coca Pay provides the best value for you</h1>
                  <p>
                    We always ready to help by providing the best service in the
                    filed of finance for you good finance provides a better life
                  </p>
                  <div>
                    <img
                      src={process.env.PUBLIC_URL + "/Fintech/asset/woman3.png"}
                      className="woman-image"
                      alt="pattern"
                    />
                  </div>
                </Col>
              </Row>
            </Col>
            <Col className="content-right-wrapper">
              <Row className="content-right-container">
                <Col className="content-header">
                  <div className="image-wrapper">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/Fintech/asset/jet-plane-right.svg"
                      }
                      className="pattern-image"
                      alt="pattern"
                    />
                  </div>
                  <div>
                    <h3>Faster ways to make transactions</h3>
                    <p>
                      By accepting online payments you are making it dead easy
                      for your customers to buy from you.
                    </p>
                  </div>
                </Col>
                <Col className="content-header">
                  <div className="image-wrapper">
                    <img
                      src={process.env.PUBLIC_URL + "/Fintech/asset/shield.svg"}
                      className="pattern-image"
                      alt="pattern"
                    />
                  </div>
                  <div>
                    <h3>Payments can be made securely</h3>
                    <p>
                      Online payments are easier to process, give you more
                      information online, and make processing faster.
                    </p>
                  </div>
                </Col>
                <Col className="content-header">
                  <div className="image-wrapper">
                    <img
                      src={
                        process.env.PUBLIC_URL + "/Fintech/asset/money-euro.svg"
                      }
                      className="pattern-image"
                      alt="pattern"
                    />
                  </div>
                  <div>
                    <h3>Alternate sources of currency</h3>
                    <p>
                      If you don't have time for checkout lines, online payments
                      make it easy to whip out your credit or debit card.
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Row>
  );
};

export default Feature2;
