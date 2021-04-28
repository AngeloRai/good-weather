import React from "react";

import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";

const style = {
  maxWidth: "450px",
  height: "350px",
  overflowX: "hidden",
  overflowY: "hidden",
};
const containerStyle = {
  maxWidth: "450px",
  height: "350px",
};

export class MapContainer extends React.Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    mapCenter: {
      lat: -23.54,
      lng: -46.63,
    },
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  render() {
    return (
      <div className="container " style={{ maxWidth: "300px", opacity: "" }}>
        <Map
          style={style}
          containerStyle={containerStyle}
          google={this.props.google}
          zoom={11}
          initialCenter={this.state.mapCenter}
        >
          <Marker onClick={this.onMarkerClick} name={"Current location"} />

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
          >
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyC4LfW4MmJgThlKn3thdzCqzh3VnphitIs",
})(MapContainer);
