/*jshint esversion: 6 */

import React, { Component } from "react";
import { Button, Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "../index.css";

const FoodTruckmarker = props => {
  return (
    <React.Fragment>
      <h1>{props.result.Name}</h1>
      <img
        onClick={props.onMarkerClick}
        className="FoodTruckMarker"
        content={props.result.Name}
        src="http://wherethatfoodtruck.com/graphics/default/logo.png"
        height="42"
        width="35"
        lat={props.Lat}
        lng={props.Lng}
        text={props.result.Name}
        alt="FoodTruck Markers"
      />
    </React.Fragment>
  );
};

export default FoodTruckmarker;
