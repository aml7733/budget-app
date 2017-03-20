import React, { Component } from 'react';
import { Link } from 'react-router';
import ItemsContainer from '../containers/ItemsContainer'


class App extends Component {
  render() {
    return (
      <div className="App">
        <ul className="nav">
          <Link to="http://localhost:3001/items">Show All Items</Link>
          <Link to="http://localhost:3001/items/new">Add New Item</Link>
        </ul>
          <ItemsContainer />
      </div>
    );
  }
}

export default App;
