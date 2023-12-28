import React from "react";
import { Row, Col } from "react-bootstrap";
import "./Feature1.scss";

const Feature1 = () => {
  return (
    <Row className="feature-container-1">
      <Row className="feature-data-container">
        <Col className="data-wrapper">
          <Row className="feature-dashboard-container">
            <Col className="data-left-wrapper">
              <Row className="data-left-container">
                <Col className="woman-image-wrapper">
                  <img
                    src={process.env.PUBLIC_URL + "/Fintech/asset/woman2.png"}
                    className="woman-image"
                    alt="woman-image"
                  />
                </Col>
                {/* <Col className="price-container">
                <Row className="price-wrapper">
                  <Col className="card-wrapper">price</Col>
                </Row>
              </Col> */}
              </Row>
            </Col>
            <Col className="content-right-wrapper">
              <Row className="content-right-container">
                <Col className="content-header">
                  <h1>Make it dead easy for your customers to buy from you.</h1>
                  <p className="sub-heading-1">
                    Online payments are easier to process, give you more
                    information online, and make processing faster.
                  </p>
                  <p className="sub-heading-2">
                    Payment with us is easy and straight forward, you can pay in
                    dollars, euros and bitcoin or ether tokens.We accept all
                    major currencies and cryptocurrencies
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

export default Feature1;
