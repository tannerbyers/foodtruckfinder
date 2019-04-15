/*jshint esversion: 6 */

import { ListGroup, ListGroupItem, Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import React, { useState } from "react";
import { useToggle } from "@availity/hooks";
let toggleOpen = false;

const ListedTrucks = props => {
  const [selected, setSelected] = useState({});

  const handleClick = index => {
    setSelected(props.Data[index]);
    console.log("clicked" + index);
    toggleOpen = !toggleOpen;
  };

  const Extended = () => {
    if (toggleOpen) {
      return (
        <Container>
          <Row>
            <Col xs="6" sm="4">
              <ListGroupItem>{selected.Hours}</ListGroupItem>
            </Col>
            <Col xs="6" sm="4">
              <a href="google.com">
                <ListGroupItem>Menu</ListGroupItem>
              </a>
            </Col>
            <Col sm="4">
              <a href="google.com">
                <ListGroupItem>Directions</ListGroupItem>
              </a>
            </Col>
          </Row>
        </Container>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="container" style={{ width: "50vh" }}>
      <ListGroup>
        {props.Data.map((result, i) => (
          <ListGroupItem onClick={() => handleClick(i)}>
            {result.Name}
          </ListGroupItem>
        ))}
      </ListGroup>
      <Extended />
    </div>
  );
};

export default ListedTrucks;
