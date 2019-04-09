import React, { Component } from "react";
import { Container } from "reactstrap";

import Header from "./Components/Header";
import SimpleMap from "./Components/SimpleMap";
import LocationBar from "./Components/LocationBar";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Container>
          <LocationBar />
        </Container>
        <br />
        <Container>
          <SimpleMap />
        </Container>
      </div>
    );
  }
}

export default App;
