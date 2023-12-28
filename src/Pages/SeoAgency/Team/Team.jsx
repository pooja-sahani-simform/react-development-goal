import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import "./Team.scss";

const Team = () => {
  return (
    <Row className="team-wrapper">
      <Col className="header-wrapper">
        <h1>Get to know our mastah & super keren</h1>
        <p>
          We provide SEO services to help your website rank higher on search
          engines like Google.
        </p>
      </Col>
      <Col className="team-list-wrapper">
        <Row className="team-content">
          <Col className="card-content">
            <img
              className="team-image"
              src={process.env.PUBLIC_URL + "/team/person1.png"}
              alt="team image"
            />
            <h2>Rakabuming Suhu</h2>
            <p>Founder, CTO</p>
          </Col>
          <Col className="card-content">
            <img
              className="team-image"
              src={process.env.PUBLIC_URL + "/team/person2.png"}
              alt="team image"
            />
            <h2>Jessica Aduhai</h2>
            <p>SEO Master</p>
          </Col>
          <Col className="card-content">
            <img
              className="team-image"
              src={process.env.PUBLIC_URL + "/team/person3.png"}
              alt="team image"
            />
            <h2>Azalea Perumahan</h2>
            <p>Account Executive</p>
          </Col>
          <Col className="card-content">
            <img
              className="team-image"
              src={process.env.PUBLIC_URL + "/team/person4.png"}
              alt="team image"
            />
            <h2>Gatot Bambang</h2>
            <p>Admin Bro</p>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Team;
