import React from 'react';
import { connect } from 'react-redux';
import { getOrders } from '../store';


class OrderHistory extends React.Component {
  componentDidMount(){
    if(this.props.loggedInUser.email){
    this.props.loadOrders(this.props.loggedInUser);
    }
  }
  render(){
    const {orders} = this.props;
    if(orders.length !== 0){
      return(
        <div>
          <table>
            <tbody>
              <tr>
                <th>Order Number</th>
                <th>Items Ordered</th>
                <th>Total</th>
              </tr>
              {orders.map(order => {
                return (
                  <tr key={order.id}>
                    <td>{order.id}</td>
                    {((JSON.parse(order.items))).map(item =>
                        (<td key={item.name}>{item.name}</td>))}
                    <td>${order.total}.00</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )}
    else{
      return(
        <div>
          <h2>Why are you looking in here? Buy something!</h2>
        </div>
      )
    }
  }
}

const mapStateToProps = ({ orders, loggedInUser }) => {
  return {
    orders,
    loggedInUser,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    loadOrders: user => dispatch(getOrders(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderHistory);
