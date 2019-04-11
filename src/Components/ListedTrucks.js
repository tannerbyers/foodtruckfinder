/*jshint esversion: 6 */

import { ListGroup, ListGroupItem } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";

const ListedTrucks = (props) => {
  return (
    <div className="container" style={{ width: '50vh' }}>
      <ListGroup>
      {props.Data.map((result, i) => (
        <ListGroupItem >{result.Name}</ListGroupItem>
      ))}
      </ListGroup>
    </div>
  );
};

export default ListedTrucks;
