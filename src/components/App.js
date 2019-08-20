import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Sidebar from './Sidebar';
import {
  setProducts,
  setCategories,
  loginUser,
  setCart,
  getUsers,
} from '../store';
import { connect } from 'react-redux';
import AdminCP from './AdminCP';

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
        {this.props.loggedInUser.isAdmin && (
          <Route path="/admincp" component={AdminCP} />
        )}
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
