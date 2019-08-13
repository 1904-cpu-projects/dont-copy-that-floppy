import React from 'react';
import { connect } from 'react-redux';
import { deleteCart } from '../store'

class OrderConfirmation extends React.Component {
  constructor(props) {
    super(props)
    this.orderNumber = this.orderNumber.bind(this);
  }

  componentDidMount () {
    this.props.deleteCart();
  }

  orderNumber() {
    let now = Date.now().toString()
    now += now + Math.floor(Math.random() * 10)
    return  [now.slice(0, 4), now.slice(4, 10), now.slice(10, 14)].join('-')
  }

  render () {
    return (
    <div>
      <h2>Thanks for shopping with us!</h2>
      <h3>Order Number: {this.orderNumber()}</h3>
    </div>
  )};
}


const mapStateToProps = ({ addedProduct }) => {
  return {
    addedProduct,
  };
};

const mapDispatchToProps = {
  deleteCart
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderConfirmation);
