import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addItem } from '../actions/itemActions';
import { browserHistory } from 'react-router';

class ItemNewContainer extends Component {
  debugger
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
          <div class="ui left corner labeled input">
            <input type="string" placeholder="Name"
            onChange={(event) => this.handleOnNameChange(event)} />
            <div class="ui left corner label">
              <i class="asterisk icon"></i>
            </div>
          </div>
          <div class="ui right labeled input">
            <div class="ui label">$</div>
            <input type="text" placeholder="Amount" onChange={(event) => this.handleOnAmountChange(event)} />
          </div>
          <br/>
          <div class="ui fluid action input">
            <input type="text" placeholder="Description" onChange={(event) => this.handleOnDescriptionChange(event)} />
          </div>

          <input type="submit" value="Add Item" />
        </form>
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({addItem: addItem}, dispatch);
};

const ConnectedItemNewContainer = connect(null, mapDispatchToProps)(ItemNewContainer);

export default ConnectedItemNewContainer;
