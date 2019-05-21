/*jshint esversion: 6 */

import React, { useState } from "react";
import { useToggle } from "@availity/hooks";
import "bootstrap/dist/css/bootstrap.min.css";
import { CardImg, Card, ListGroupItem, Row, Col } from "reactstrap";

const ExtendedList = props => {
  const [selected, setSelected] = useState({});
  const [isOpen, toggleOpen] = useToggle();

  const handleClick = index => {
    toggleOpen(!isOpen);
    setSelected({ index });
    console.log("table selected");
  };

  return (
    <React.Fragment>
      <Card className="thecard">
        <div className="thefront">
          <CardImg onClick={handleClick} src={props.data.ImgSrc} />
          <h1 onClick={handleClick}>{props.data.Name}</h1>
        </div>
        {/*  For Mobile Devices */}
        <div>
          <div>
            {isOpen ? (
              <h2>
                <a
                  href={props.data.AddressLink}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Address
                </a>
              </h2>
            ) : null}
            {isOpen ? (
              <h2>
                <a
                  href={props.data.Menu}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Menu
                </a>
              </h2>
            ) : null}
          </div>
        </div>
        {/*  For Desktop Sceens */}
        <div className="theback">
          <h1 onClick={handleClick}>{props.data.Name}</h1>
          <br />
          <div>
            <h2>
              <a
                href={props.data.AddressLink}
                rel="noopener noreferrer"
                target="_blank"
              >
                Address
              </a>
            </h2>
            <h2>
              <a
                href={props.data.Menu}
                rel="noopener noreferrer"
                target="_blank"
              >
                Menu
              </a>
            </h2>
          </div>
        </div>
      </Card>
    </React.Fragment>
  );
};

export default ExtendedList;
