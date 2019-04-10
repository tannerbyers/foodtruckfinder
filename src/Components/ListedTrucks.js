/*jshint esversion: 6 */

import { ListGroup, ListGroupItem } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";

const TestData = [
  {
      Name: "Sweeto Burrito",
      Location: [30.237247, -81.519488],
      Pic: "google.com",
      Days: [ 1, 3, 5 ],
      Hours: "10 AM - 1 PM"
  },
 {
      Name: "Chinchillas",
      Location: [30.237247, -81.519488],
      Pic: "google.com",
      Days: [ 1, 3, 5 ],
      Hours: "10 AM - 1 PM"
  },
  {
      Name: "Mamas Food Truck",
      Location: [30.237247, -81.519488],
      Pic: "google.com",
      Days: [ 1, 3, 5 ],
      Hours: "10 AM - 1 PM"
  }
]
const ListedTrucks = () => {
  return (
    <div className="container" style={{ width: '50vh' }}>
      <ListGroup>
      {TestData.map((result, i) => (
        <ListGroupItem >{result.Name}</ListGroupItem>
      ))}
      </ListGroup>
    </div>
  );
};

export default ListedTrucks;
