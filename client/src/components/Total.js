import React from 'react';

const Total = (props) => {
  if (props.items) {
    let counter = 0.0;
    props.items.assets.forEach(item => counter += parseInt(item.amount, 10));
    props.items.liabilities.forEach(item => counter += parseInt(item.amount, 10));

    return (
      <h2 className="ui header">
        <div className="content">
          Total: ${counter}
        </div>
      </h2>
    )
  } else {
    return null
  }
}


export default Total;
