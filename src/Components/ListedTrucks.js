/*jshint esversion: 6 */

import {
  ListGroup,
  ListGroupItem,
  Col,
  Row,
  Container,
  Jumbotron
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ExtendedList from "./ExtendedList";
import React, { useState } from "react";

import "../index.css";

const ListedTrucks = props => {
  return (
    <Container >
      <h2>
        <b> 🚚Today's Food Trucks🚚 </b>
      </h2>
      <div className="TruckList">
        {props.Data.map((result, index) => (
          <ExtendedList index={index} data={result} />
        ))}
      </div>
    </Container>
  );
};

export default ListedTrucks;
