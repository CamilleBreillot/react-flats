import React, { Component } from 'react';
import Flat from './flat';

class FlatList extends Component {
  renderList = () => {
    return this.props.flats.map((flat, index) => {
      return (
        <Flat
          flat={flat}
          key={flat.lat}
          index={index}
        />
      );
    });
  };

  render() {
    return (
      <div className="flat-list">
        {this.renderList()}
      </div>
    );
  }
}

export default FlatList;
