/*jshint esversion: 6 */

import { ListGroup, ListGroupItem, Col, Row, Container, Jumbotron} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ExtendedList from "./ExtendedList";
import React, { useState } from "react";
import { useToggle } from "@availity/hooks";

import "../index.css"

const ListedTrucks = props => {
  return (
    <Container className="TruckList">
      <h2> <b> 🚚 Today's Food Trucks 🚚 </b> </h2>
      <ListGroup>
        {props.Data.map((result, index) => (
          <ExtendedList index={index} data={result} />
        ))}
      </ListGroup>
    </Container>
  );
};

export default ListedTrucks;
