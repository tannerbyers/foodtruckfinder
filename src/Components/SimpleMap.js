import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";

import GoogleMapReact from "google-map-react";
import FoodTruckmarker from "./FoodTruckMarker";
import InfoBox from "./InfoBox";

import "../index.css";

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const API_KEY = "AIzaSyAOEsdFfHB05mHHfRn0bsfENp8mZ1qIGO0";

class SimpleMap extends Component {

  constructor(props) {
    super(props);
    this.state = {
     show: false,
    };
  }


  static defaultProps = {
    center: {
      lat: 30.237247,
      lng: -81.519488
    },
    zoom: 11
  };

  

  onMarkerClick = () => {
    console.log("Marker Clicked");
    this.setState({
      show: !this.state.show,
    });
    console.log(this.state.show);

  };


  render(props) {
    return (
      // Important! Always set the container height explicitly
      <div
        className="container-fluid"
        style={{ position: "relative", height: "70vh", width: "90%" }}
      >
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY }}
          center={this.props.CurrentLocation || this.props.center}
          zoom={this.props.CurrentZoom || this.props.zoom}
        >
          <img
            src="http://pluspng.com/img-png/you-are-here-png-hd-you-are-here-icon-512.png"
            lat={
              this.props.CurrentLocation.centered
                ? this.props.CurrentLocation.lat
                : null
            }
            lng={
              this.props.CurrentLocation.centered
                ? this.props.CurrentLocation.lng
                : null
            }
            height="60"
            width="60"
          />

          <InfoBox />
          <AnyReactComponent
            lat={this.props.center.lat}
            lng={this.props.center.lng}
            text="Availity"
            height="40"
            width="40"
          />

          {this.props.Data.map((result, index) => (
            <FoodTruckmarker
              index={index}
              show={this.state.show}
              onMarkerClick={this.onMarkerClick}
              result={result}
              lat={result.Lat}
              lng={result.Lng}
            />
          ))}
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
