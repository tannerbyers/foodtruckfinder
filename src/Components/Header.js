/*jshint esversion: 6 */

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron, Container } from 'reactstrap';

const Header = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-1">Food Truck Finder</h1>
          <p className="lead">This app allows you to find local food trucks near you.</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Header;