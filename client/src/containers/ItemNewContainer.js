import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addItem } from '../actions/itemActions';
import { browserHistory } from 'react-router';

class ItemNewContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      amount: ''
    };
  }

  handleOnSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    this.props.addItem(this.state);
    browserHistory.push('/items');
  }

  handleOnNameChange(event) {
    this.setState({
      name: event.target.value
    });
  }

  handleOnDescriptionChange(event) {
    this.setState({
      description: event.target.value
    });
  }

  render() {
    return (
      <div>
        <h2>Add an Item</h2>
        <form onSubmit={(event) => this.handleOnSubmit(event)} >
          <input
            type="text"
            placeholder="Name"
            onChange={(event) => this.handleOnNameChange(event)} />
          <input
            type="text"
            placeholder="Amount"
            onChange={(event) => this.handleOnAmountChange(event)} />
          <input
            type="text"
            placeholder="Description"
            onChange={(event) => this.handleOnDescriptionChange(event)} />
          <input
            type="submit"
            value="Add Item" />
        </form>
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({addItem: addItem}, dispatch);
};

export default connect(null, mapDispatchToProps)(ItemNewContainer);
