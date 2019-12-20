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
        <b> 🚚 Today's Food Trucks 🚚 </b>
      </h3>
      <h5><i>(list view)</i></h5>
      <div className="TruckList">
        {props.Data.map((result, index) => (
          <ExtendedList index={index} data={result} />
        ))}
      </div>
    </Container>
  );
};

export default ListedTrucks;
