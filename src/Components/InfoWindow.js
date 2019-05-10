/*jshint esversion: 6 */

import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const InfoWindow = (props) => {
    const infoWindowStyle = {
      position: 'absolute',
       bottom: 20,
      left: '-100px',
      width: 220,
      backgroundColor: 'white',
      boxShadow: '0 2px 7px 1px rgba(0, 0, 0, 0.3)',
      padding: 10,
      fontSize: 14,
      zIndex: 100,
    };
  
    return (
        
<div style={infoWindowStyle}>
      <div style={{ fontSize: 16 }}>
        {props.content.Name}
      </div>
      <div style={{ fontSize: 14 }}>
        <span style={{ color: 'grey' }}>
          {props.content.Address}{' '}
        </span>
      </div>
      <div style={{ fontSize: 14, color: 'grey' }}>
        {props.content.Hours}
      </div>
      <div style={{ fontSize: 14, color: 'grey' }}>
        {'$'.repeat(props.content.Price)}
      </div>
    </div>
  );
};

  export default InfoWindow;
