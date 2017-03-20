import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchItems} from '../actions/itemActions.js'
import Assets from '../components/Assets';
import Liabilities from '../components/Liabilities'

class ItemsContainer extends Component {

  componentDidMount(){
    if (this.props.items.length === 0) {
      console.log('in component did mount')
      fetchItems();
      debugger;
    }
  }

  render() {
    let assets = this.props.items.filter(item => item.amount >= 0);
    let liabilities = this.props.items.filter(item => item.amount < 0);

    return (
      <div>
        <div className='col-lg-12'>
          <Assets items={assets} />
          <Liabilities items={liabilities} />
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    items: state.items
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({
      fetchItems: fetchItems
    }, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemsContainer);
