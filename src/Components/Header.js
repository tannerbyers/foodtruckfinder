/*jshint esversion: 6 */

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Jumbotron, Container } from "reactstrap";

const Header = props => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 >Food Truck Finder</h1>
          <p>
           Find nearby foodtrucks with our realtime Food Truck Locater App! 
          </p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Header;
