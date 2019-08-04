import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

const Header = ({ products }) => {
  //console.log(products);
  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/products'>Products ({products.length})</Link>
      <Link to='/cart'>Cart</Link>
      <Link to='/login'>Log In</Link>
      <Link to='/signup'>Sign Up</Link>
    </div>
  )
}

const mapStateToProps = ({products})=>{
  return {
    products,
  }
}

export default connect(mapStateToProps)(Header)
