import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";

const YOUR_API_KEY = "AIzaSyAZqFSO2P-36ZiTkqwvFPcsN9Vz_iz8-Xw";

const mapStyles = {
  width: "100%",
  height: "100%",
};

export class WorldMap extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    markers: [
      {
        name: "Alabama",
        position: { lat: 32.318231, lng: -86.902298 },
      },
      {
        name: "Moscow",
        position: { lat: 55.7558, lng: 37.6173 },
      },
      {
        name: "Addis Ababa",
        position: { lat: 8.9806, lng: 38.7578 },
      },
      {
        name: "Hong Kong",
        position: { lat: 22.3193, lng: 114.1694 },
      },
      {
        name: "New York",
        position: { lat: 43.299428, lng: -74.217933 },
      },
    ],
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  onClose = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={3}
        style={mapStyles}
        initialCenter={{ lat: 49.16659, lng: -123.133569 }}
      >
        {this.state.markers.map((marker, index) => (
          <Marker
            key={index} // Need to be unique
            onClick={this.onMarkerClick}
            name={marker.name}
            position={marker.position}
          />
        ))}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: YOUR_API_KEY,
})(WorldMap);
