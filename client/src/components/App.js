import React, { Component } from 'react';
import { Link } from 'react-router';
// import ItemsContainer from '../containers/ItemsContainer'


class App extends Component {
  render() {
    return (
      <div className="App">
        <ul className="nav">
          <li><Link to="/items">Show All Items</Link></li>
          <li><Link to="/items/new">Add New Item</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

export default App;
