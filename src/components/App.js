import React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Sidebar from './Sidebar';
import Products from './Products';
import Cart from './Cart';
import Login from './Login';
import SignUp from './SignUp';
import { store, setProducts, setCategories, loginUser } from '../store';
import { connect } from 'react-redux';

class App extends React.Component {
  componentDidMount() {
    this.props.loadProducts();
    this.props.loadCategories();
    this.props.loadSession();
  }

  render() {
    return (
      <HashRouter>
        <h2>
          <img
            style={{ width: 100, height: 100 }}
            src="https://i.imgur.com/BOdXYeP.png"
          />
          Floppy Shoppy
        </h2>
        <Route path="/" component={Header} />
        <Route path="/" component={Sidebar} />
        <Route exact path="/" component={Home} />
        <Route path="/products/category/:id" component={Products} />
        <Route path="/products" exact component={Products} />
        <Route path="/cart" component={Cart} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
      </HashRouter>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadProducts: () => dispatch(setProducts()),
    loadCategories: () => dispatch(setCategories()),
    loadSession: () => dispatch(loginUser())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(App);
