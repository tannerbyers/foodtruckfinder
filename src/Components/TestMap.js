/*jshint esversion: 6 */

import React from 'react';
import  {Input, InputGroupAddon, InputGroup, Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const TestMap = (props) => {
    render () {

         initMap = () => {
            var map = new google.maps.Map(document.getElementById('map'), {
              center: {lat: -34.397, lng: 150.644},
              zoom: 6
            });
        }
        return (
<main>
    <div id="map"></div>
</main>
)
}
}
export default TestMap;