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
    }else{
      toast('Something went wrong', { type: 'error'});
    }

  }

  render() {
    const {total} = this.state
    const {handleToken} = this;

    return (
      <div>
        <StripeCheckout
          token={handleToken}
          billingAddress
          shippingAddress
          stripeKey='pk_test_P9Khr1QBteH9PBFoGaiRkfOw00RMsE4U5s'
          amount = {total * 100}
        />
      </div>
    )
  }
}

// const Checkout = ({ cart }) => {
//   let totalPrice = 0
//   cart.forEach(product => totalPrice += product.price*product.quantity)
//   if (!cart[0]) {
//     return (
//       <div>
//         You have no items in the cart.
//       </div>
//     )
//   }
//   return (
//     <div>
//       <table>
//         <tbody>
//           <tr>
//             <th>Item</th>
//             <th>Quantity</th>
//             <th>Price</th>
//           </tr>
//           {cart.map(product =>
//             <tr>
//               <td>{product.name}</td>
//               <td>{product.quantity}</td>
//               <td>${product.price*product.quantity}</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//       <br />
//       <h5>Total: ${totalPrice}</h5>
//       <br />
//       <h5>Shipping Information</h5>
//       <form>
//         <label>
//           Address 1
//           <input type='text' />
//         </label>
//         <br />
//         <label>
//           Address 2
//           <input type='text' />
//         </label>
//         <br />
//         <label>
//           City
//           <input type='text' />
//         </label>
//         <br />
//         <label>
//           State
//           <input type='text' />
//         </label>
//         <br />
//         <label>
//           Zip Code
//           <input type='text' />
//         </label>
//         <br />
//       </form>
//       <Link to='/orderconfirmation'><button>Place Order</button></Link>
//     </div>
//   );
// }



const mapStateToProps = ({ cart }) => {
  return {
    cart,
  };
};

export default connect(mapStateToProps)(Checkout);
