import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchItems} from '../actions/itemActions.js'
import Assets from '../components/Assets';
import Liabilities from '../components/Liabilities'

class ItemsContainer extends Component {

  componentWillMount(){
    if (this.props.items.length === 0) {
      this.props.fetchItems();
    }
  }

  render() {
    let assets, liabilities;
    if (this.props.items[0]) {
      assets = this.props.items[0].assets;
      liabilities = this.props.items[0].liabilities;
    }

    return (
      <div>
          <Assets items={assets} /><br/>
          <Liabilities items={liabilities} />
          {this.props.children}
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  console.log('in map state to props ItemsContainer')
  return {
    items: state.items
  };
}

const mapDispatchToProps = (dispatch) => {
  console.log('in map dispatch to props ItemsContainer')
  return bindActionCreators({
      fetchItems: fetchItems
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemsContainer);
