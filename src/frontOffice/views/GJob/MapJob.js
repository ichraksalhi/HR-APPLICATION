import React, {Component} from 'react';
import Geocode from "react-geocode";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import { isPropertyAccessExpression } from 'typescript';

    export class MapJob extends Component {
        render() {       
            return (
              <></>
            );
};
    }
export default GoogleApiWrapper({
    apiKey: ('')
  })(MapJob);