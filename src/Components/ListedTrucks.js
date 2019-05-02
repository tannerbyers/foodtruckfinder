/*jshint esversion: 6 */

import { ListGroup, ListGroupItem, Col, Row, Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ExtendedList from './ExtendedList'
import React, { useState } from "react";
import { useToggle } from "@availity/hooks";

const ListedTrucks = props => {

  return (
    <Container>
              <h1>Today's Food Trucks</h1>
      <ListGroup>
        {props.Data.map((result, index) => (
          <ExtendedList  index={index} data={result} />
        ))}
      </ListGroup>
    </Container>
  );
};

export default ListedTrucks;
