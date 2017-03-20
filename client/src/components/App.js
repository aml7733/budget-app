import React, { Component } from 'react';
import Nav from 'react-bootstrap/lib/Nav';
import { Link } from 'react-router';


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav bsStyle="pills">
          <Link to="/items">Show Items</Link>
          <Link to="/items/new">Create New Item</Link>
          <Link to="/items/clear">Delete All Items</Link>
        </Nav>
      </div>
    );
  }
}

export default App;
