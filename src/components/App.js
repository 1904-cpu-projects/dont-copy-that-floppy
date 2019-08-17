import React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Sidebar from './Sidebar';
import Products from './Products';
import Cart from './Cart';
import Login from './Login';
import SignUp from './SignUp';
import Checkout from './Checkout';
import {
  setProducts,
  setCategories,
  loginUser,
  setCart,
  getUsers,
  deleteCart
} from '../store';
import { connect } from 'react-redux';
import SingleProduct from './SingleProduct';
import OrderConfirmation from './OrderConfirmation';
import AdminCP from './AdminCP';
import UserProfile from './UserProfile';
import EditProfile from './EditProfile';

class App extends React.Component {
  componentDidMount() {
    this.props.loadProducts();
    this.props.loadCategories();
    this.props.loadSession();
    this.props.loadCart();
    this.props.loadUsers();
  }

  render() {
    return (
      <HashRouter>
        <Route path="/" component={Header} />
        <Route path="/" component={Sidebar} />
        <Route exact path="/" component={Home} />
        <Route path="/products/search/:name" />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/orderconfirmation" component={OrderConfirmation} />
        {this.props.loggedInUser.isAdmin && (
          <Route path="/admincp" component={AdminCP} />
        )}
        <Route path="/userprofile" component={UserProfile} />
        <Route path="/editprofile" component={EditProfile} />
      </HashRouter>
    );
  }
}

const mapStateToProps = ({ loggedInUser }) => {
  return {
    loggedInUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadProducts: () => dispatch(setProducts()),
    loadCategories: () => dispatch(setCategories()),
    loadSession: () => dispatch(loginUser()),
    loadCart: () => dispatch(setCart()),
    loadUsers: () => dispatch(getUsers())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
