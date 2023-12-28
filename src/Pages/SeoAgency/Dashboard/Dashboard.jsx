import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import "./Dashboard.scss";
import logo from "../../../logo.svg";

const Dashboard = () => {
  return (
    <Row className="dashboard-container">
      <Row className="home-container">
        <Col className="content-wrapper">
          <Row className="content-container">
            <Col className="home-header">
              <Row className="header-image-wrapper">
                <Col>
                  <img src={logo} className="App-logo" alt="logo" />
                </Col>
              </Row>
              <Row className="header-content-wrapper">
                <Col>About</Col>
                <Col>Blog</Col>
                <Col>Contact</Col>
              </Row>
            </Col>
            <Col className="content-header">
              <Col>
                <h1>Growing your business comes down to 1- thing</h1>
                <p>
                  That's where we come in. We make it easy for you to boost your
                  online search results and grow your business online. Contact
                  us today to get started!
                </p>
              </Col>
              <Col className="button-wrapper">
                <Button className="btn--primary">Get Started Free</Button>
                <img
                  className="arrow-image"
                  src={process.env.PUBLIC_URL + "/Arrow.svg"}
                  alt="arrow image"
                />
              </Col>
            </Col>
          </Row>
          <Row className="image-wrapper">
            <Col>
              <img
                className="dashboard-image"
                src={process.env.PUBLIC_URL + "/dashboard-image.png"}
                alt="dashboard image"
              />
              <div className="graph-box">
                  <h3>Overview</h3>
              </div>
              <div className="graph-box-2">
                  <h3>Customer Growth</h3>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Row>
  );
};

export default Dashboard;
