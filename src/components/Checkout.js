import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import { toast } from 'react-toastify'
toast.configure();


class Checkout extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      product: this.props.cart,
      total: 0,
    }
    this.handleToken = this.handleToken.bind(this);

    this.state.product.forEach(prod => this.state.total += prod.price*prod.quantity)

  }

  async handleToken(token){
    const {total} = this.state;
    const {product} = this.state

    const response = await axios.post('/stripe/checkout', {
      token, product, total});

    const { status, order } = response.data;
    if(status === 'success'){
      window.location.hash = `/orderconfirmation/${order.id}`;
    }else{
      toast('Something went wrong', { type: 'error'});
    }

  }

  render() {
    const {total, product} = this.state
    const {handleToken} = this;

    if(!product[0]){
      return (
        <div>
          You have no items in the cart.
        </div>
      )
    }
    else{
      return (
        <div>
        <table className="table table-striped">
          <tbody>
            <tr>
              <th scope="col">Item</th>
              <th scope="col">Price</th>
            </tr>
            {product.map(product =>
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>${product.price*product.quantity}</td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="alert alert-primary" role="alert">
        Total: ${total.toFixed(2)}
        </div>
        <div>
            <StripeCheckout
              token={handleToken}
              billingAddress
              shippingAddress
              stripeKey='pk_test_P9Khr1QBteH9PBFoGaiRkfOw00RMsE4U5s'
              amount = {total * 100}
            />
        </div>
    </div>
      )
    }
  }
}

const mapStateToProps = ({ cart }) => {
  return {
    cart,
  };
};

export default connect(mapStateToProps)(Checkout);
