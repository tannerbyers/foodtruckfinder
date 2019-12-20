/*jshint esversion: 6 */

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Jumbotron, Container } from "reactstrap";

const Header = props => {
  return (
    <div className="Header">
      <div fluid>
        <Container fluid>
          <h1 className="display-3">Food Truck Finder</h1>
          <p className="lead">
            Find nearby foodtrucks with our realtime Food Truck Locater App!
          </p>
        </Container>
      </div>
    </div>
  );
};

export default Header;
