import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addProduct } from '../store';

const SingleProduct = ({ product, addProductToCart }) => {
  return (
    <div
      className="card"
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        width: '350px',
        margin: '1em'
      }}
    >
      <div className="text-center">
        <img
          className="card-img-top center"
          src={product.imageUrl}
          alt="product image"
          style={{ width: '100%', height: 250 }}
        />
      </div>
      <div className="card-body">
        <h5 className="card-title">
          {product.name}
          <p>
            <small> by {product.brand}</small>
          </p>
        </h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text">{`$${product.price}`}</p>
        <p>
          <small>
            {product.isAvailable
              ? `In Stock. ${product.quantity} available.`
              : 'Out of stock.'}
          </small>
        </p>
        <Link>
          <button
            className="btn btn-primary mt-auto"
            onClick={() => addProductToCart(product)}
          >
            Add to Cart
          </button>
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = ({ addedProduct }) => {
  return {
    addedProduct
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addProductToCart: event => {
      dispatch(addProduct(event));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleProduct);
