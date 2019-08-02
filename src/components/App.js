import React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Sidebar from './Sidebar';
import Products from './Products';
import { store, setProducts, setCategories } from '../store';
import { connect } from 'react-redux';

class App extends React.Component {
  componentDidMount() {
    this.props.loadProducts();
    this.props.loadCategories();
  }

  render() {
    return (
      <HashRouter>
        <h2>Floppy Shoppy</h2>
        <Route path="/" component={Header} />
        <Route path="/" component={Sidebar} />
        <Route exact path="/" component={Home} />
        <Route path="/products" component={Products} />
      </HashRouter>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadProducts: () => dispatch(setProducts()),
    loadCategories: () => dispatch(setCategories())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(App);
