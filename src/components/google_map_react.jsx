import React, { Component } from 'react';
import Marker from './marker';

class GoogleMapReact extends Component {
  render() {
    return (
      <div className='marker'>
        <Marker />
      </div>
    );
  }
}

export default GoogleMapReact;
