import React, { Component } from 'react';

class Assets extends Component {
  render() {
    const assets = this.props.items && this.props.items.map(asset => (
      <p>{asset.name}  :  {asset.amount}</p>
    ));

    return (
      <div className="eight wide column">
        <h3>Assets</h3>
        {assets}
      </div>
    )
  }
}
export default Assets;
