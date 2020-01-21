/*jshint esversion: 6 */

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "reactstrap";

const Footer = props => {
  return (
    <div>
      <Container className="footer" fluid>
        <p className=" lead">Jacksonville Food Truck Locater 2019 Created by <a  className="footerLink" target="_blank" target="_top" href="https://www.tannerbyers.com"> <strong> Tanner Byers </strong> </a></p>
      </Container>
    </div>
  );
};

export default Footer;
