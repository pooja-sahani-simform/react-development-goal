import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import "./Logo.scss";

const Logo = () => {
  const [logoList, setLogoList] = useState([
    "/logo/Airbnb.svg",
    "/logo/Google.svg",
    "/logo/Microsoft.svg",
    "/logo/OYO.svg",
    "/logo/FedEx.svg",
    "/logo/Amazon.svg",
    "/logo/OYO.svg",
    "/logo/FedEx.svg",
    "/logo/Google.svg",
    "/logo/Walmart.svg",
  ]);

  return (
    <Row className="logo-container">
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
    </Row>
  );
};

export default Logo;
