import React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
import Header from './Header'
import Home from './Home'
import Products from './Products'
import {store, setProducts} from '../store'
import {connect} from 'react-redux'

class App extends React.Component {

  componentDidMount(){
    this.props.loadProducts();
  }

  render() {
    return (
      <HashRouter>
        <h2>Floppy Shoppy</h2>
        <Route path='/' component={Header} />
        <Route exact path='/' component={Home} />
        <Route path='/products' component={Products} />
      </HashRouter>
    )
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    loadProducts: ()=> dispatch(setProducts)
  }
}

export default connect(mapDispatchToProps)(App);
