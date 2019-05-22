/*jshint esversion: 6 */

import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const InfoBox = props => {
  const InfoBoxStyle = {
    height: "50",
    width: "25%",
    position: "absolute",
    right: 10,
    backgroundColor: "white",
    boxShadow: "0 2px 7px 1px rgba(0, 0, 0, 0.3)",
    fontSize: 14,
    zIndex: 100
  };

  return (
    <div style={InfoBoxStyle}>
      <div style={{ fontSize: 16 }}>
        <h3>Selet a Foodtruck Marker to get more information</h3>
      </div>
      <div style={{ fontSize: 14 }}>
        <span style={{ color: "grey" }} />
      </div>
      <div style={{ fontSize: 14, color: "grey" }} />
      <div style={{ fontSize: 14, color: "grey" }} />
    </div>
  );
};

export default InfoBox;
