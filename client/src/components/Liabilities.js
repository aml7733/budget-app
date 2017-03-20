import React from 'react';

const Liabilities = (props) => {
  const liabilities = props.liabilities.map(liability => (
      <p>{liability.name}  :  {liability.amount}</p>
  ));

    return (
    <div className="col-md-6">
      {liabilities}
    </div>
  )
}

export default Liabilities;
