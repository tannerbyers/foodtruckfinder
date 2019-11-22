/*jshint esversion: 6 */

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { CardImg, Card } from "reactstrap";

const ExtendedList = props => {
  return (
    <React.Fragment>
      <Card>
        <div>
          <img className="dimg" src={props.data.ImgSrc} />
          <h2>{props.data.Name}</h2>
        </div>
        <div className="MobileFoodtruckList">
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
