/*jshint esversion: 6 */

import React, { Component } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import SimpleMap from "./Components/SimpleMap";
import ListedTrucks from "./Components/ListedTrucks";
import FindMeBtn from "./Components/FindMeBtn";
import Navbar from "./Components/Navbar";
import "./App.css";
import "./index.css";

const TestData = [
  {
    Name: "Sweeto Burrito",
    Location: [30.237247, -81.519488],
    Menu: "https://sweetoburrito.com/menu/",
    Hours: "12AM - 8PM",
    Lat: 30.287064,
    Lng: -81.548977,
    AddressLink: "https://goo.gl/maps/muJ1x7rneTFNWMCj6",
    Address: "Random Street",
    Price: 5,
    ImgSrc:
      "https://github.com/tannerbyers/foodtruckfinder/blob/master/src/assets/Sweeto.png?raw=true"
  },
  {
    Name: "Rite on Que",
    Location: [30.237247, -81.519488],
    Menu: "http://www.riteonque.com/menu.html",
    Hours: "10AM - 6PM",
    Lat: 30.245050,
    Lng: -81.540540,
    AddressLink: "https://goo.gl/maps/zEwtZFM8Kb6vhU4K8",
    Address: "10550 Deerwood Lake Blvd",
    Price: 2,
    ImgSrc:
      "http://nebula.wsimg.com/0a07d20da49a3814e66d49cb2fdb7873?AccessKeyId=F868C14ED52F37E941A9&disposition=0&alloworigin=1"
  },
  {
    Name: "Alma Fusion",
    Location: [30.237247, -81.519488],
    Menu: "https://www.eatalmafusion.com/online-ordering",
    Hours: "11AM - 2PM",
    Lat: 30.215030,
    Lng: -81.578750,
    AddressLink: "https://goo.gl/maps/2RXarZDqrxokM4hW9",
    Address: "8335 Freedom Crossing Trail, Jacksonville, FL 32256",
    Price: 3,
    ImgSrc:
    "https://github.com/tannerbyers/foodtruckfinder/blob/master/src/assets/almafoodtruck.jpg?raw=true"
  },
  {
    Name: "Sweeto Burrito",
    Location: [30.237247, -81.519488],
    Menu: "https://sweetoburrito.com/menu/",
    Hours: "12AM - 8PM",
    Lat: 30.287064,
    Lng: -81.548977,
    AddressLink: "https://goo.gl/maps/muJ1x7rneTFNWMCj6",
    Address: "Random Street",
    Price: 5,
    ImgSrc:
      "https://github.com/tannerbyers/foodtruckfinder/blob/master/src/assets/Sweeto.png?raw=true"
  },
  {
    Name: "Rite on Que",
    Location: [30.237247, -81.519488],
    Menu: "http://www.riteonque.com/menu.html",
    Hours: "10AM - 6PM",
    Lat: 30.245050,
    Lng: -81.540540,
    AddressLink: "https://goo.gl/maps/zEwtZFM8Kb6vhU4K8",
    Address: "10550 Deerwood Lake Blvd",
    Price: 2,
    ImgSrc:
      "http://nebula.wsimg.com/0a07d20da49a3814e66d49cb2fdb7873?AccessKeyId=F868C14ED52F37E941A9&disposition=0&alloworigin=1"
  },
  {
    Name: "Alma Fusion",
    Location: [30.237247, -81.519488],
    Menu: "https://www.eatalmafusion.com/online-ordering",
    Hours: "11AM - 2PM",
    Lat: 30.215030,
    Lng: -81.578750,
    AddressLink: "https://goo.gl/maps/2RXarZDqrxokM4hW9",
    Address: "8335 Freedom Crossing Trail, Jacksonville, FL 32256",
    Price: 3,
    ImgSrc:
    "https://github.com/tannerbyers/foodtruckfinder/blob/master/src/assets/almafoodtruck.jpg?raw=true"
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
  componentDidMount(){
    setTimeout(() => {
      document.querySelector(".loading").outerHTML = "";
    }, 1500);
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <FindMeBtn getLocation={this.getLocation} />
        <br />
        <SimpleMap
          CurrentZoom={this.state.zoom}
          CurrentLocation={this.state}
          Data={TestData}
        />
        <b />
        <ListedTrucks Data={TestData} /> 
        <Footer />
      </div>
    );
  }
}

export default App;
