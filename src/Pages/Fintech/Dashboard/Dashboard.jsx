import React,{ useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import "./Dashboard.scss";

const Dashboard = () => {
  const [logoList, setLogoList] = useState([
    "/Fintech/logo/image1.png",
    "/Fintech/logo/image2.png",
    "/Fintech/logo/image3.png",
    "/Fintech/logo/image4.png",
    "/Fintech/logo/image5.png",
  ]);
  return (
    <Row className="dashboard-container">
      <Row className="home-container">
        <Col className="content-wrapper">
          <Row className="content-container">
            <Col className="home-header">
              <Row className="header-image-wrapper">
                <Col>
                  <img
                    src={process.env.PUBLIC_URL + "/Fintech/logo/app-logo.svg"}
                    className="App-logo"
                    alt="logo"
                  />
                </Col>
              </Row>
              <Row className="header-content-wrapper">
                <Col>About</Col>
                <Col>Blog</Col>
                <Col>Contact</Col>
              </Row>
            </Col>
            <Col className="button-wrapper">
              <Button className="btn--primary--fintech">Sign In</Button>
            </Col>
          </Row>
          <Row className="home-dashboard-container">
            <Col className="content-left-wrapper">
              <Row className="content-left-container">
                <Col className="woman-image-wrapper">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/Fintech/asset/woman-rejoice.png"
                    }
                    className="woman-image"
                    alt="woman-image"
                  />
                  <img
                    src={process.env.PUBLIC_URL + "/Fintech/asset/pattren.svg"}
                    className="pattern-image"
                    alt="pattern"
                  />
                  <img
                    src={
                      process.env.PUBLIC_URL + "/Fintech/asset/down-arrow.svg"
                    }
                    className="down-arrow"
                    alt="arrow"
                  />
                </Col>
                <Col className="price-container">
                  <Row className="price-wrapper">
                    <Col className="card-wrapper">price</Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col className="content-right-wrapper">
              <Row className="content-right-container">
                <Col className="content-header">
                  <h1>Pay everything got simple & fast</h1>
                  <p>
                    All in one for you payment transaction online without having
                    to leave the house to make transactions
                  </p>
                  <Button className="btn--primary--fintech">
                    Register & Earn $50
                  </Button>
                </Col>
                <Col>
                  <Row className="award-wrapper">
                    <Col>
                      <h1>18k+</h1>
                      <p>Cards Created</p>
                    </Col>
                    <hr />
                    <Col>
                      <h1>20+</h1>
                      <p>Awards Winning</p>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col className="logo-container">
          {logoList.map((v) => {
            return (
              <Col>
                <img
                  className="logo-image"
                  src={process.env.PUBLIC_URL + v}
                  alt="logo image"
                />
              </Col>
            );
          })}
        </Col>
      </Row>
    </Row>
  );
};

export default Dashboard;
