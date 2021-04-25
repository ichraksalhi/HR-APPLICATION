import React, {Component, useState} from 'react';
import Geocode from "react-geocode";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import { isPropertyAccessExpression } from 'typescript';

    export class MapJob extends Component {
      constructor(props) { 
        super(props); 
        this.state = { location: props.location, updated: 0, latitude:0, longitude:0}; 
        this.Address();   
      }
      Address(){
        Geocode.setApiKey('AIzaSyBiOzsSm7BG41VFsUSDbnaei6orntKitn0');
        Geocode.setRegion("es");
        const self= this;
          // Get latitude & longitude from address.
        Geocode.fromAddress(this.state.location).then(
          (response) => {
            const { lat, lng } = response.results[0].geometry.location;
            console.log("Latitude:"+ lat,"longitude:"+ lng);
            self.setState({ ...self.state, latitude: lat});
            self.setState({ ...self.state, longitude: lng});
            //alert("longitude"+ this.state.longitude, "latitude:"+this.state.latitude);
        },
        (error) => {
          console.error(error);
        }
      );
        }
         
        render() {       
            return (
                <>
                <p>latitude: {this.state.latitude}</p>
                <p>latitude: {this.state.longitude}</p>
                <Map google={this.props.google} zoom={14} initialCenter={{lat: parseFloat(this.state.latitude), 
                lng: parseFloat(this.state.longitude)}} 
                   style={{ width: "600px", height: "400px" }}>
                <Marker position={{ lat: parseFloat(this.state.latitude), lng: parseFloat(this.state.longitude)}} />
                </Map>          
                </>
            );
};
    }
export default GoogleApiWrapper({
    apiKey: ('AIzaSyBiOzsSm7BG41VFsUSDbnaei6orntKitn0')
  })(MapJob);