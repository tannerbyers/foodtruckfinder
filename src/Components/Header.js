/*jshint esversion: 6 */

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "reactstrap";

const Header = props => {
  return (
    <div className="Header">
      <div>
        <Container>
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
