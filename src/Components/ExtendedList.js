/*jshint esversion: 6 */

import React, { useState } from "react";
import { useToggle } from "@availity/hooks";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, ListGroupItem, Row, Col } from "reactstrap";

const ExtendedList = props => {
  const [selected, setSelected] = useState({});
  const [isOpen, toggleOpen] = useToggle();

  const handleClick = index => {
    toggleOpen(!isOpen);
    setSelected({ index });
    console.log("table selected");
  };

  return (
    <div>
      <Container>
        <ListGroupItem className="border">
        <h1 onClick={handleClick}>
          {props.data ? props.data.Name : null}
          </h1>
          <Row>
            <Col>{isOpen ? <img className="TruckImage" src={props.data.ImgSrc}/> : null}</Col>
            <Col>
            <Row>{isOpen ? <h2><a href={props.data.AddressLink} style={{position: "relative", textAlign: "center"}} rel="noopener noreferrer" target="_blank">Address</a></h2> : null}</Row>
            <Row>{isOpen ? <h2><a href={props.data.Menu} style={{position: "relative", textAlign: "center"}} rel="noopener noreferrer" target="_blank">Menu</a></h2> : null} </Row>
            </Col>
          </Row>
        </ListGroupItem>
      </Container>
    </div>
  );
};

export default ExtendedList;
