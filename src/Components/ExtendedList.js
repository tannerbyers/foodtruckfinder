/*jshint esversion: 6 */

import React from "react";
import { useToggle } from "@availity/hooks";
import "bootstrap/dist/css/bootstrap.min.css";
import { CardImg, Card } from "reactstrap";

const ExtendedList = props => {
  const [isOpen, toggleOpen] = useToggle();

  const handleClick = index => {
    toggleOpen(!isOpen);
    console.log("table selected");
  };

  return (
    <React.Fragment>
      <Card className="thecard">
        <div className="thefront">
          <CardImg onClick={handleClick} src={props.data.ImgSrc} />
          <h2 onClick={handleClick}>{props.data.Name}</h2>
        </div>
        {/*  For Mobile Devices */}
        <div className="MobileFoodtruckList">
          <div>
            {isOpen ? (
              <h3>
                <a
                  href={props.data.AddressLink}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Address
                </a>
              </h3>
            ) : null}
            {isOpen ? (
              <h3>
                <a
                  href={props.data.Menu}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Menu
                </a>
              </h3>
            ) : null}
          </div>
        </div>
        {/*  For Desktop Sceens */}
        <div className="theback">
          <h1 onClick={handleClick}>{props.data.Name}</h1>
          <br />
          <div>
            <h3>
              <a
                href={props.data.AddressLink}
                rel="noopener noreferrer"
                target="_blank"
              >
                Address
              </a>
            </h3>
            <h3>
              <a
                href={props.data.Menu}
                rel="noopener noreferrer"
                target="_blank"
              >
                Menu
              </a>
            </h3>
          </div>
        </div>
      </Card>
    </React.Fragment>
  );
};

export default ExtendedList;
