import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import "./Home.scss";
import Dashboard from "./Dashboard/Dashboard";
import AboutUs from "./AboutUs/AboutUs";
import Feature1 from "./Feature1/Feature1";
import Feature2 from "./Feature2/Feature2";
import JoinUs from "./JoinUs/JoinUs";

const Home = () => {
  return (
    <Row className="home-wrapper">
      <Dashboard />
      <AboutUs />
      <Feature1 />
      <JoinUs />
      <Feature2 />
    </Row>
  );
};

export default Home;
