import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { logoutUser } from '../store';

const Header = ({ products, user, loggedInUser, handleLogout, addedProduct }) => {
  console.log(loggedInUser.email);
  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/products'>Products ({products.length})</Link>
      <Link to='/cart'>Cart ({addedProduct.length})</Link>
      <Link to='/login'>{loggedInUser.email ? <button onClick = {()=>handleLogout()}>Logout {loggedInUser.email}</button>  : `Login` }</Link>

      <Link to='/signup'>{(!loggedInUser.email) ? "Sign Up" : ""}</Link>
    </div>
  )
}

const mapStateToProps = ({products, user, loggedInUser, addedProduct})=>{
  return {
    products,
    user,
    loggedInUser,
    addedProduct
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    handleLogout: function(ev){
      event.preventDefault();

      dispatch(logoutUser());
    }
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
