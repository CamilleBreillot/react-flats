import React, { Component } from 'react';
import GoogleMapReact from './google_map_react';
import FlatList from './flat_list';

class App extends Component {
  render() {
    return (
      <div>
        <div className="flat-list">
          <FlatList />
        </div>
        <div className="map-container">
          <GoogleMapReact />
        </div>
      </div>
    );
  }
}

export default App;
