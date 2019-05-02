/*jshint esversion: 6 */

import React, { Component } from "react";
import { Button,Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default class FindMeBtn extends Component {

  render(position, props) {
    return (
        <Container>
      <Button color="primary" onClick={this.props.getLocation} >
        <h3>Use My Location</h3>
      </Button>
      </Container>
    );
  }
}
