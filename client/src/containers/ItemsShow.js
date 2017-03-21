import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteItem } from '../actions/itemActions'
import { browserHistory } from 'react-router'
// import {showModal, hideModal} from '../actions/modalActions.js'


class ItemsShow extends Component {
  // componentWillMount(){
  //   this.props.showModal();
  // }
  handleDelete(event){
    event.preventDefault();
    const deleteId = event.target.dataset.id;
    this.props.deleteItem(deleteId);
    browserHistory.push('/items');
    debugger
  }

  render() {
    const item = this.props.item;
    const isOpen = this.props.isOpen;
    return (
      <div className={isOpen ? 'modal modal--is-open' : 'modal'}>
        <h2>{item.name}  :  {item.amount}</h2>
        <p>{item.description}</p>
        <button className="negative ui button" onClick={(event) => this.handleDelete(event)} data-id={item.id}>Delete This Item</button>
      </div>
    );
  }
};



const mapStateToProps = (state, ownProps) => {
  console.log(state);
  if (state.items.length > 0) {
    const requestedItem = ((state.items[0].assets.find(item => item.id === parseInt(ownProps.params.id, 10))) || (state.items[0].liabilities.find(item => item.id === parseInt(ownProps.params.id, 10))))
    return {
      item: requestedItem,
    };
  }
};

const mapDispatchToProps = (dispatch) => {
  console.log('in map dispatch to props ItemsShow')
  return bindActionCreators({
      deleteItem: deleteItem
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemsShow);
