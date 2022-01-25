import React, { Component } from 'react';
import GoogleMapReact from './google_map_react';
import FlatList from './flat_list';
import flats from '../../data/flats';

class App extends Component {
  render() {

    return (
      <div>
        <FlatList flats={flats}/>
        <div className="map-container">
          <GoogleMapReact />
        </div>
      </div>
    );
  }
}

export default App;
