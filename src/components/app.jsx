import React, { Component } from 'react';
import FlatList from './flat_list';
import flats from '../../data/flats';
import GoogleMapReact from 'google-map-react';
import Marker from './marker';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flats,
      selectedFlat: flats[0]
    };
  }

  center = () => {
    return {
      lat: this.state.selectedFlat.lat,
      lng: this.state.selectedFlat.lng
    };
  }

  render() {

    return (
      <div>
        <FlatList
          flats={this.state.flats}
          selectedFlat={this.state.selectedFlat}
        />
        <div className="map-container">
          <GoogleMapReact defaultCenter={this.center()} defaultZoom={12} />
        </div>
      </div>
    );
  }
}
export default App;
