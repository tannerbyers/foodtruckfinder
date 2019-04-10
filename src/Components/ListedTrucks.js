/*jshint esversion: 6 */

import { ListGroup, ListGroupItem } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";

const ListedTrucks = () => {
  return (
    <div className="container" style={{ width: '50vh' }}>
      <ListGroup>
        <ListGroupItem >Sweeto Burrito</ListGroupItem>
        <ListGroupItem>Chinchillas</ListGroupItem>
        <ListGroupItem>Not Your Mommas Food Truck</ListGroupItem>
        <ListGroupItem>Rite on Que</ListGroupItem>
        <ListGroupItem>Blazin Azn</ListGroupItem>
      </ListGroup>
    </div>
  );
};

export default ListedTrucks;
