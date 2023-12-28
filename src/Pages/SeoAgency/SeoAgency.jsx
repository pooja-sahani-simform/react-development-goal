import React from "react";
import { Row } from "react-bootstrap";
import "./SeoAgency.scss";
import Dashboard from "./Dashboard/Dashboard";
import Logo from "./Logo/Logo";
import Feature from "./Feature/Feature";
import AboutUs from "./AboutUs/AboutUs";
import FAQ from "./FAQ/FAQ";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Strategies from "./Strategies/Strategies";
import Team from "./Team/Team";

const Home = () => {
  return (
    <Row className="home-wrapper">
      <Dashboard />
      <Logo />
      <Feature />
      <AboutUs />
      <Strategies />
      <Team />
      <FAQ />
      <Contact />
      <Footer />
    </Row>
  );
};

export default Home;
