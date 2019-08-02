import React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
import Header from './Header.js'
import Home from './Home.js'
import Products from './Products.js'

class App extends React.Component {
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

export default App;
