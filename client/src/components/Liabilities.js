import React, { Component } from 'react';
import { Link } from 'react-router';

class Liabilities extends Component {
  render() {
    const liabilities = this.props.items && this.props.items.map(liability => (
      <div className="item" key={liability.id}>
        <div className="content">
          <div className="header">{liability.name}</div>
          {liability.amount}
        </div>
        <Link to={`/items/${liability.id}`}>Show Details</Link>
      </div>
    ));

    return (
      <div className="ui celled list">
        <h2>Liabilities</h2>
        {liabilities}
      </div>
    )
  }
}
export default Liabilities;
