/*jshint esversion: 6 */

import React, { Component } from "react";
import { Container, Row } from "reactstrap";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import SimpleMap from "./Components/SimpleMap";
import ListedTrucks from "./Components/ListedTrucks";
import LocationBar from "./Components/LocationBar";
import FindMeBtn from "./Components/FindMeBtn";
import "./App.css";

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
      Hours: "10 AM - 1 PM",
      Lat: 30.239889,
      Lng: -81.591209
  },
  {
      Name: "Mamas Food Truck",
      Location: [30.237247, -81.519488],
      Pic: "google.com",
      Days: [ 1, 3, 5 ],
      Hours: "10 AM - 1 PM",
      Lat: 30.25,
      Lng: -81.53
  }
]

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      lat: 30.237247,
      lng: -81.519488,
      zoom: null
    }
    this.getLocation = this.getLocation.bind(this);
  }
  
  getLocation() {
    navigator.geolocation.getCurrentPosition(
        position => {
          this.setState({ lat: position.coords.latitude, lng: position.coords.longitude, zoom: 14});
          console.log("lat = " + this.state.lat, "lng = " + this.state.lng)
        },
        error => console.log(error)
      );
    }
  
  
  render() {

    return (
      <div className="App">
        <Header />
        <LocationBar />
        < FindMeBtn getLocation={this.getLocation}/>
        <br />
        <Container>
          <Row>
            <ListedTrucks Data={TestData}/>
            <SimpleMap CurrentZoom={this.state.zoom} CurrentLocation={this.state} Data={TestData} />
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;
