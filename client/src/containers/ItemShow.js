import React from 'react';
import { connect } from 'react-redux';

const ItemsShow = (props) => {
  const item = props.item;

  return (
    <div className="col-md-4">
      <h2>{Item.name}</h2>
      <p>{Item.description}</p>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    item: state.items.find(item => item.id == ownProps.routeParams.id)
  };
};

export default connect(mapStateToProps)(ItemsShow);
