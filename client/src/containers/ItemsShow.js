import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {showModal, hideModal} from '../actions/modalActions.js'


class ItemsShowModal extends Component {
  componentWillMount(){
    this.props.showModal();
  }
  render() {
    const item = this.props.item;
    const isOpen = this.props.isOpen;
    return (
      <div className={isOpen ? 'modal modal--is-open' : 'modal'}>
        <h2>{item.name}  :  {item.amount}</h2>
        <p>{item.description}</p>
      </div>
    );
  }
};



const mapStateToProps = (state, ownProps) => {
  console.log(state);
  if (state.items.length > 0) {
    const requestedItem = ((state.items[0].assets.find(item => item.id === parseInt(ownProps.params.id, 10))) || (state.items[0].liabilities.find(item => item.id === parseInt(ownProps.params.id, 10))))
    return {
      item: requestedItem || null
    };
  }
};

const mapDispatchToProps = (dispatch) => {
  console.log('in map dispatch to props ItemsShowModal')
  return bindActionCreators({
      showModal: showModal
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemsShowModal);
