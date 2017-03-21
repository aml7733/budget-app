import React from 'react';
import { connect } from 'react-redux';

const ListItem = (props) => {
  const item = props.item;

  return (
    <div className="col-md-4">
      <h2>{item.name}  :  {item.amount}</h2>
      <p>{item.description}</p>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    item: state.items.find(item => item.id === ownProps.routeParams.id)
  };
};

export default connect(mapStateToProps)(ItemsShow);
