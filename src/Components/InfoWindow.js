/*jshint esversion: 6 */

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const InfoWindow = (props) => {
    const infoWindowStyle = {
      position: 'absolute',
       bottom: 20,
      left: '-180px',
      width: 400,
      backgroundColor: 'white',
      boxShadow: '0 2px 7px 1px rgba(0, 0, 0, 0.3)',
      padding: 10,
      fontSize: 14,
      zIndex: 100,
    };
  
    return (
        
<div style={infoWindowStyle}>
      <div style={{ fontSize: 16 }}>
      <h3> {props.content.Name} </h3>
      </div>
      <div style={{ fontSize: 14 }}>
        <span style={{ color: 'black' }}>
          <a href={props.content.AddressLink} target="_blank" rel="noopener noreferrer">{props.content.Address}</a>
        </span>
      </div>
      <div style={{ fontSize: 14, color: 'grey' }}>
        {props.content.Hours}
      </div>
      <div style={{ fontSize: 14, color: 'green' }}>
        {'$'.repeat(props.content.Price)}
      </div>
    </div>
  );
};

  export default InfoWindow;
