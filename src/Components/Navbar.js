/*jshint esversion: 6 */

import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

import "../index.css";

const NavBar = props => {
  return (
<div id="container">
    <nav>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Food Truck Finder</a></li>
            <li><a href="#">Add Your Foodtruck</a></li>
            <li><a href="#">Contact Me</a></li>
        </ul>
    </nav>
</div>
  );
};

export default NavBar;
