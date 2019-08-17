import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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

    const { status } = response.data;
    if(status === 'success'){
      toast('Success! Check email for details',
      { type: 'success'})
      window.location.hash = '/orderconfirmation';
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
        <table>
          <tbody>
            <tr>
              <th>Item</th>
              <th>Price</th>
            </tr>
            {product.map(product =>
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>${product.price*product.quantity}</td>
              </tr>
            )}
          </tbody>
        </table>
        <br />
        <h5>Total: ${total}</h5>
        <br />
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
