import React, { Component } from 'react';
import Flat from './flat';

class FlatList extends Component {
  render() {
    return (
      <div className="flat-list">
        {this.props.flats.map((flat, index) => {
          return (
            <Flat
              flat={flat}
              key={flat.lat}
              index={index}
            />
          );
        })
        }
;
      </div>
    );
  }
}

export default FlatList;
