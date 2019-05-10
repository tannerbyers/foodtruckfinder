/*jshint esversion: 6 */

import React from "react";
import { Input, InputGroupAddon, InputGroup, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const LocationBar = props => {
  return (
    <div>
      <InputGroup size="lg" className="col-md-6 container-fluid">
        <Input placeholder="Zip Code or Address" />
        <InputGroupAddon addonType="prepend">
          <Button>Search</Button>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
};

export default LocationBar;