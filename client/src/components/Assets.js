import React, { Component } from 'react';

const Assets = (props) => {
  const assets = props.assets.map(asset => (
      <p>{asset.name}  :  {asset.amount}</p>
  ));

    return (
    <div className="col-md-6">
      {assets}
    </div>
  )
}
