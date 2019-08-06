import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { addProduct } from '../store';

const SingleProduct = ({ product, addProductToCart }) => {
  return (
    <div
      className="card"
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        width: '250px',
        margin: '1em'
      }}
    >
      <img
        className="card-img-top"
        src={product.imageUrl}
        alt="product image"
        style={{ width: 200, height: 200 }}
      />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text">{`$${product.price}`}</p>
        <Link to="/cart">
          <button className="btn btn-primary" onClick={() => addProductToCart(product)}>Add to Cart</button>
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = ({addedProduct})=>{
  return {
    addedProduct
  }
}

const mapDispatchToProps = (dispatch) => {
return {
  addProductToCart: event => {dispatch(addProduct(event))},
}
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
