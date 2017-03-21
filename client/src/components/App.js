import React, { Component } from 'react';
import { Link } from 'react-router';
// import ItemsContainer from '../containers/ItemsContainer'


class App extends Component {
  debugger

  render() {
    return (
      <div className="App">
        <h3 className="ui block header">Welcome to Budge</h3>
        <ul className="nav">
          <li><Link to="/items/new">Add New Item</Link></li>
        </ul>
      </div>
    );
  }
}

export default App;
//<li><Link to="/items">Show All Items</Link></li>
