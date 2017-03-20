import React, { Component } from 'react';
import { Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router';
import ItemsContainer from '../containers/ItemsContainer'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar fixedTop={true}>
          <Nav>
            <Button><Link to="/items">Show All Items</Link></Button>
            <Button><Link to="/items/new">Add New Item</Link></Button>
          </Nav>
        </Navbar>
        <ItemsContainer />
      </div>
    );
  }
}

export default App;


// <Link to="/items/new">Add New Item</Link>
