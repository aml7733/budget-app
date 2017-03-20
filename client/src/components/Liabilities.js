import React, { Component } from 'react';

class Liabilities extends Component {
  render() {
    const liabilities = this.props.items && this.props.items.map(liability => (
      <p>{liability.name}  :  {liability.amount}</p>
    ))


    return (
      <div className="liabilities col-md-6">
        <h3>Liabilities</h3>
        {liabilities}
      </div>
    )
  }
}

export default Liabilities;
