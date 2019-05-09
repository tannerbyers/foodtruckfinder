import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import FoodTruckmarker from "./FoodTruckMarker";

import "../index.css";

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const API_KEY = "AIzaSyAOEsdFfHB05mHHfRn0bsfENp8mZ1qIGO0";

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 30.237247,
      lng: -81.519488
    },
    zoom: 11
  };

  onMarkerClick = () => {
    console.log("Marker Clicked");
  };

  handleApiLoaded = (map, maps) => {
    var infowindow = new maps.InfoWindow({
      content: "contentString"
    });
  };

  render(props) {
    return (
      // Important! Always set the container height explicitly
      <div
        className="container-fluid"
        style={{ height: "80vh", width: "100%" }}
      >
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY }}
          center={this.props.CurrentLocation || this.props.center}
          zoom={this.props.CurrentZoom || this.props.zoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => this.handleApiLoaded(map, maps)}
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

          <AnyReactComponent
            lat={this.props.center.lat}
            lng={this.props.center.lng}
            text="Availity"
            height="40"
            width="40"
          />

          {this.props.Data.map((result, i) => (
            <FoodTruckmarker
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
