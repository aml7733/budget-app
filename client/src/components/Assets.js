import React, { Component } from 'react';
import { Link } from 'react-router';

class Assets extends Component {
  render() {
    const assets = this.props.items && this.props.items.map(asset => (
      <div className="item" key={asset.id}>
        <div className="content">
          <div className="header">{asset.name}</div>
          {asset.amount}
        </div>
        <Link to={`/items/${asset.id}`}>Show Details</Link>
      </div>
    ));

    return (
      <div className="ui celled list">
        <h2>Assets</h2>
        {assets}
      </div>
    )
  }
}
export default Assets;
