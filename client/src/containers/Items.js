import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchItems} from '../actions/itemActions.js'
import Assets from '../components/Assets';
import Liabilities from '../components/Liabilities'
import Total from '../components/Total'

class Items extends Component {
  constructor(props) {
    super(props);

    this.state = {
      assets: [],
      liabilities: []
    }
  }

  componentWillMount(){
    if (this.props.items.length === 0) {
      this.props.fetchItems();
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      assets: nextProps.items[0].assets,
      liabilities: nextProps.items[0].liabilities
    })
  }

  handleClick(event) {
    event.preventDefault();
    const sortedAssets = this.state.assets.sort((a, b) => {return parseFloat(a.amount) - parseFloat(b.amount)})
    const sortedLiabilities = this.state.liabilities.sort((a, b) => {return parseFloat(a.amount) - parseFloat(b.amount)})

    this.setState({
      assets: sortedAssets,
      liabilities: sortedLiabilities
    })
  }

  render() {
    const itemList = this.props.items[0]

    return (
      <div>
          <Assets items={!!itemList ? this.state.assets : null} /><br/>
          <Liabilities items={!!itemList ? this.state.liabilities : null} /><br/>
          <Total items={itemList} /><br/>
          {this.props.children}<br/>
          <button className="ui primary basic button" onClick={(event) => this.handleClick(event)}>Sort Items</button>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
      fetchItems: fetchItems
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Items);
