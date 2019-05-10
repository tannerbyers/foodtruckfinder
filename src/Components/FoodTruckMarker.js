/*jshint esversion: 6 */

import React, { useState, Component } from "react";
import { Button, Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import InfoWindow from "./InfoWindow";
import { useToggle } from "@availity/hooks";

import "../index.css";

const FoodTruckmarker = props => {

  const [selected, setSelected] = useState({});
  const [isOpen, toggleOpen] = useToggle();


  const onMarkerClick = (index) => {
    console.log("Marker Clicked");
    toggleOpen(!isOpen);
    setSelected({ index });
  };


  return (
    <React.Fragment>
      {isOpen && <InfoWindow index={props.index} content={props.result} />}
      <img
        onClick={onMarkerClick}
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
