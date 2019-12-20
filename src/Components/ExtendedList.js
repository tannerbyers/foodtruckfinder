/*jshint esversion: 6 */

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { CardImg, Card } from "reactstrap";
import FoodtruckImg from "../assets/food-truck.png"
import directionsImg from "../assets/directions.png"
import menuImg from "../assets/menu.png"

const ExtendedList = props => {
  return (
    <React.Fragment>
      <Card className="foodtruckcard">
          <img className="dimg" src={FoodtruckImg} />
          <h2>{props.data.Name}</h2>
        <div className="MobileFoodtruckList">
          <div className="CardDescription">
              <h3>
                <a
                  href={props.data.AddressLink}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img src={directionsImg}height="42" width="42" />
                </a>
              </h3>
              <h3>
                <a
                  href={props.data.Menu}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img src={menuImg}height="42" width="42" />
                </a>
              </h3>
          </div>
        </div>
      </Card>
    </React.Fragment>
  );
};

export default ExtendedList;
