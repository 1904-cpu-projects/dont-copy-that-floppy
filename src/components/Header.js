import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

const Header = ({ products, user }) => {
  console.log(user);
  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/products'>Products ({products.length})</Link>
      <Link to='/cart'>Cart</Link>
      <Link to='/login'>Log In</Link>

      <Link to='/signup'>{(!user.email) ? "Sign Up" : `Welcome ${user.firstName}`}</Link>
    </div>
  )
}

const mapStateToProps = ({products, user})=>{
  return {
    products,
    user,
  }
}

export default connect(mapStateToProps)(Header)
