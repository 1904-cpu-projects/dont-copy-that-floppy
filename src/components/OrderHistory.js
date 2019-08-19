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
    if(orders.length > 0){
      return(
        <div>
          <table className="table table-striped">
            <tbody>
              <tr>
                <th scope="col">Order Number</th>
                <th scope="col">Items Ordered</th>
                <th scope="col">Total</th>
              </tr>
              {orders.map(order => {
                return (
                  <tr key={order.id}>
                    <th scope="row">{order.id}</th>
                    <td>{((JSON.parse(order.items))).map(item =>
                        (<div key={item.name}>{item.name}</div>))}
                    </td>
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
