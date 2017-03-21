import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addItem } from '../actions/itemActions';
import { browserHistory } from 'react-router';

class ItemsNew extends Component {
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
          <div className="ui left corner labeled input">
            <input type="string" placeholder="Name"
            onChange={(event) => this.handleOnNameChange(event)} />
            <div className="ui left corner label">
              <i className="asterisk icon"></i>
            </div>
          </div>
          <div className="ui right labeled input">
            <div className="ui label">$</div>
            <input type="text" placeholder="Amount" onChange={(event) => this.handleOnAmountChange(event)} />
          </div>
          <br/>
          <div className="ui fluid action input">
            <input type="text" placeholder="Description" onChange={(event) => this.handleOnDescriptionChange(event)} />
          </div>

          <input type="submit" value="Add Item" />
        </form>
        {this.props.children}
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({addItem: addItem}, dispatch);
};

export default connect(null, mapDispatchToProps)(ItemsNew);
