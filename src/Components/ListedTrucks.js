/*jshint esversion: 6 */

import {Container} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ExtendedList from "./ExtendedList";
import React from "react";

import "../index.css";

const ListedTrucks = props => {
  return (
    <Container >
      <h3>
        <b> <span role="img" aria-labelledby="truck"> 🚚
        Today's Food Trucks 
      🚚 </span></b>
      </h3>
      <h5><i>(list view)</i></h5>
      <div className="TruckList">
        {props.Data.map((result) => (
          <ExtendedList data={result} />
        ))}
      </div>
    </Container>
  );
};

export default ListedTrucks;
