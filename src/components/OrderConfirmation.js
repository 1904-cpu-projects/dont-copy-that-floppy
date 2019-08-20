import React from 'react';
import { connect } from 'react-redux';
import { deleteCart, getOrders, getOrder } from '../store'


class OrderConfirmation extends React.Component {

  componentDidMount () {
    this.props.deleteCart();
    if(this.props.loggedInUser.email){
      this.props.loadOrders(this.props.loggedInUser);
    }
    else{
      this.props.loadOrder(this.props.match.params.id);
    }
  }

  render () {
    const {orders} = this.props;

    return (
    <div>
      <h2>Thanks for shopping with us!</h2>
      <h3>Order Number: {this.props.match.params.id}</h3>
    </div>
  )};
}


const mapStateToProps = ({ orders, loggedInUser }) => {
  return {
    orders,
    loggedInUser,
  };
};

const mapDispatchToProps = dispatch => {
  return {
  deleteCart: () => dispatch(deleteCart()),
  loadOrders: user => dispatch(getOrders(user)),
  loadOrder: id => dispatch(getOrder(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderConfirmation);
