import React, { Component } from 'react';
import { Link } from 'react-router';



class App extends Component {
  debugger

  render() {
    return (
      <div className="App">
        <h3 className="ui block header">Welcome to Budge</h3>
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
