import React from 'react';
import { connect } from 'react-redux';

const OrderConfirmation = ({ addedProduct }) => {
  function orderNumber() {
    let now = Date.now().toString()
    now += now + Math.floor(Math.random() * 10)
    return  [now.slice(0, 4), now.slice(4, 10), now.slice(10, 14)].join('-')
  }

  return (
    <div>
      <h2>Thanks for shopping with us!</h2>
      <h3>Order Number: {orderNumber()}</h3>
      <h3>Order Details:</h3>
    </div>
  );
}

const mapStateToProps = ({ addedProduct }) => {
  return {
    addedProduct,
  };
};

export default connect(mapStateToProps)(OrderConfirmation);
