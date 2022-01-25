import React, { Component } from 'react';

class Flat extends Component {
  render() {
    return (
      <div className="card">
        <div className='card-category'>
          {this.props.flat.price} {this.props.flat.priceCurrency}
        </div>
        <div className="card-description">
          <h2>{this.props.flat.name}</h2>
        </div>
        <div className="card-link">
        </div>
      </div>
    );
  }
}

export default Flat;
