import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

const Header = ({ products }) => {
  //console.log(products);
  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/products'>Products ({products.length})</Link>
    </div>
  )
}

const mapStateToProps = ({products})=>{
  return {
    products,
  }
}

export default connect(mapStateToProps)(Header)
