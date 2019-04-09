import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

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
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="container-fluid" style={{ height: '80vh', width: '70vh' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={30.237247}
            lng={-81.519488}
            text="Availity"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;