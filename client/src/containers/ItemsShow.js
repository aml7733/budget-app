import React from 'react';
import { connect } from 'react-redux';

const ItemsShow = (props) => {
  const item = props.item;

  return (
    <div className="col-md-4">
      <h2>{item.name}  :  {item.amount}</h2>
      <p>{item.description}</p>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps)
  return {
    item: state.items.find(item => item.id === +ownProps.params.id)
  };
};

const ConnectedItemsShow = connect(mapStateToProps)(ItemsShow);

export default ConnectedItemsShow;
