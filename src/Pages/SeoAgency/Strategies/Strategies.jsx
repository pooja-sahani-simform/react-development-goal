import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import "./Strategies.scss";

const Strategies = () => {
  return (
    <Row className="strategies-container">
      <Col className="header-container">
        <h1>Qualities & Customizable Website Optimization Strategies</h1>
      </Col>
      <Col className="content-container">
        <div className="item">
          <hr />
          <div className="item-row">
            <h2>Find your target keywords</h2>
            <p>
              Select keywords aligned with your target market and use them to
              return search engine results. As you research keywords, don’t
              forget about user intent.
            </p>
          </div>
        </div>
        <div className="item">
          <hr />
          <div className="item-row">
            <h2>Build better backlinks</h2>
            <p>
              Backlinks from other highly-ranked sites can help organically
              improve your standing in search results. Best bet? Create and
              submit relevant, market-focused content to industry news or
              knowledge sites.
            </p>
          </div>
        </div>
        <div className="item">
          <hr />
          <div className="item-row">
            <h2>Optimize your on-page content</h2>
            <p>
              Great content relies on relevance. Any blog post, video, podcast,
              or digital resource you create should focus on your target market.
            </p>
          </div>
        </div>
        <div className="item">
          <hr />
          <div className="item-row">
            <h2>Speed up your website</h2>
            <p>
              Website speed is a critical component of the user experience — on
              any device. Google began incorporating mobile page speed in 2018
              as a factor in search rankings, making improved performance a
              factor in favorable results.
            </p>
          </div>
        </div>
      </Col>
      <Col className="button-wrapper">
        <Button className="btn--primary">Explore All Strategies</Button>
      </Col>
    </Row>
  );
};

export default Strategies;
