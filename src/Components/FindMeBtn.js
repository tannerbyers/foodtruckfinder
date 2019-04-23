/*jshint esversion: 6 */

import React, { Component } from "react";
import { Input, InputGroupAddon, InputGroup, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default class FindMeBtn extends Component {
    constructor(props) {
        super(props);
        this.state = {
          lat: null,
          lng: null,
        }
        this.getLocation = this.getLocation.bind(this);
      }

   getLocation() {
    navigator.geolocation.getCurrentPosition(
        position => {
          this.setState({ lat: position.coords.latitude, lng: position.coords.longitude});
          console.log(this.state.lat)
        },
        error => console.log(error)
      );
    }
  
  render(position) {
    return (
      <Button color="primary" onClick={this.getLocation}>
        <h3>Use My Location:</h3>
        <h3>{this.state.lat}, {this.state.lng}</h3>
      </Button>
    );
  }
}
