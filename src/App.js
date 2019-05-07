/*jshint esversion: 6 */

import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import SimpleMap from "./Components/SimpleMap";
import ListedTrucks from "./Components/ListedTrucks";
import FindMeBtn from "./Components/FindMeBtn";
import "./App.css";
import "./index.css";
const TestData = [
  {
    Name: "Sweeto Burrito",
    Location: [30.237247, -81.519488],
    Menu: "google.com",
    Days: [1, 3, 5],
    Hours: "12 AM - 8 PM",
    Lat: 30.287064,
    Lng: -81.548977,
    Address: "Random Street"
  },
  {
    Name: "Chinchillas",
    Location: [30.237247, -81.519488],
    Menu: "google.com",
    Days: [1, 3, 5],
    Hours: "10 AM - 6 PM",
    Lat: 30.239889,
    Lng: -81.591209,
    Address: "Your Street"
  },
  {
    Name: "Mamas Food Truck",
    Location: [30.237247, -81.519488],
    Menu: "<a href = www.google.com />",
    Days: [1, 3, 5],
    Hours: "9 AM - 1 PM",
    Lat: 30.25,
    Lng: -81.53,
    Address: "my Street"
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 30.237247,
      lng: -81.519488,
      zoom: null,
      centered: false
    };
    this.getLocation = this.getLocation.bind(this);
  }

  getDays() {
    var d = new Date();
    var n = d.getDay();
    console.log(n);
  }
  getLocation() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          zoom: 14,
          centered: true
        });
        console.log("lat = " + this.state.lat, "lng = " + this.state.lng);
      },
      error => console.log(error)
    );
  }

  render() {
    return (
      <div className="App">
        <Header />
        <FindMeBtn getDays={this.getDays} getLocation={this.getLocation} />
        <br />
        <Row className="">
          <Col>
            <ListedTrucks Data={TestData} />
          </Col>
          <Col>
            <SimpleMap
              CurrentZoom={this.state.zoom}
              CurrentLocation={this.state}
              Data={TestData}
            />
          </Col>
        </Row>
        <Footer />
      </div>
    );
  }
}

export default App;
