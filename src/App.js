/*jshint esversion: 6 */

import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import SimpleMap from "./Components/SimpleMap";
import ListedTrucks from "./Components/ListedTrucks";
import FindMeBtn from "./Components/FindMeBtn";
import FoodTruckMarker from "./Components/FoodTruckMarker"
import "./App.css";
import "./index.css";
const TestData = [
  {
    Name: "Sweeto Burrito",
    Location: [30.237247, -81.519488],
    Menu: "google.com",
    Days: [1, 3, 5],
    Hours: "12AM - 8PM",
    Lat: 30.287064,
    Lng: -81.548977,
    Address: "Random Street",
    Price: 5,
    ImgSrc: "https://scontent-mia3-1.xx.fbcdn.net/v/t1.0-9/16684326_1647846598850794_8907527528520582985_n.jpg?_nc_cat=100&_nc_ht=scontent-mia3-1.xx&oh=40214ff8bc9ded15acda85198825bdd2&oe=5D762C08"
  },
  {
    Name: "Chinchillas",
    Location: [30.237247, -81.519488],
    Menu: "google.com",
    Days: [1, 3, 5],
    Hours: "10AM - 6PM",
    Lat: 30.239889,
    Lng: -81.591209,
    Address: "Your Street",
    Price: 2,
    ImgSrc: "https://foodtruckfinderusa.com/uploads/Chinchillas%20Eats%20on%20the%20Streets%20Food%20Truck%20Jacksonville.jpeg"
    
  },
  {
    Name: "Mr. Taco Truck",
    Location: [30.287050, -81.548980],
    Menu: "www.google.com",
    Days: [1, 3, 5],
    Hours: "6:30PM – 12AM",
    Lat: 30.25,
    Lng: -81.53,
    AddressLink: "https://goo.gl/maps/muJ1x7rneTFNWMCj6",
    Address: "10143 Beach Blvd, Jacksonville, FL 32246",
    Price: 3,
    ImgSrc: "data:image/jpeg;base64,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"
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
          centered: !this.state.centered
        });
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
        <Row className="grouping">
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
