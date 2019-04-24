/*jshint esversion: 6 */

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';

const Footer = (props) => {
  return (
    <div>
        <Container fluid>
          <p className="lead">Tanner Byers LLC </p>
        </Container>
    </div>
  );
};

export default Footer;