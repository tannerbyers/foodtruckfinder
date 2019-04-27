/*jshint esversion: 6 */

import { ListGroup, ListGroupItem } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";

const ListedTrucks = (props) => {
  return (
    <div>
      <ListGroup>
      {props.Data.map((result, i) => (
        <ListGroupItem >{result.Name}</ListGroupItem>
      ))}
      </ListGroup>
    </div>
  );
};

export default ListedTrucks;
