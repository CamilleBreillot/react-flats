import React, { Component } from 'react';
import GoogleMapReact from './google_map_react';
import FlatList from './flat_list';
import flats from '../../data/flats';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flats,
      selectedFlat: flats[0]
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
          <GoogleMapReact />
        </div>
      </div>
    );
  }
}
export default App;
