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

    const TestData = [
      {
          Name: "Sweeto Burrito",
          Location: [30.237247, -81.519488],
          Pic: "google.com",
          Days: [ 1, 3, 5 ],
          Hours: "10 AM - 1 PM",
          Lat: 30.287064,
          Lng: -81.548977
    
      },
     {
          Name: "Chinchillas",
          Location: [30.237247, -81.519488],
          Pic: "google.com",
          Days: [ 1, 3, 5 ],
          Hours: "10 AM - 4 PM",
          Lat: 30.239889,
          Lng: -81.591209
      },
      {
          Name: "Mamas Food Truck",
          Location: [30.237247, -81.519488],
          Pic: "google.com",
          Days: [ 1, 3, 5 ],
          Hours: "9 AM - 5 PM",
          Lat: 30.25,
          Lng: -81.53
      }
    ]

    return (
      <div className="App">
        <Header />
        <LocationBar />
        <br />
        <Container>
          <Row>
            <ListedTrucks Data={TestData}/>
            <SimpleMap Data={TestData} />
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;
