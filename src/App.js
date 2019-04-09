/*jshint esversion: 6 */

import React, { Component } from "react";
import { Container, Row } from "reactstrap";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import SimpleMap from "./Components/SimpleMap";
import ListedTrucks from "./Components/ListedTrucks";
import LocationBar from "./Components/LocationBar";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <LocationBar />
        <br />
        <Container>
          <Row>
            <ListedTrucks />
            <SimpleMap />
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;
