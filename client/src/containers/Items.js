import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchItems} from '../actions/itemActions.js'
import Assets from '../components/Assets';
import Liabilities from '../components/Liabilities'
import Total from '../components/Total'

class Items extends Component {

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
          <Liabilities items={liabilities} /><br/>
          <Total items={this.props.items[0]} /><br/>
          {this.props.children}<br/>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  console.log('in map state to props Items')
  return {
    items: state.items,
  };
}

const mapDispatchToProps = (dispatch) => {
  console.log('in map dispatch to props Items')
  return bindActionCreators({
      fetchItems: fetchItems
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Items);
