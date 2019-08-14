import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addProduct } from '../store';

const SingleProduct = ({ product, addProductToCart, cart }) => {
  function alreadyinCart(productId) {
    let alreadyinCart = false;
    cart.forEach(item => {
      if (item.id === productId) {
        alreadyinCart = true;
      }
    })
    return alreadyinCart
  }

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
        <small>{alreadyinCart(product.id) ? 'Already added to the cart.': 'In stock.'}</small>
        <Link>
          <div>
            <button
              disabled={alreadyinCart(product.id) ? true: false}
              className="btn btn-primary mt-auto"
              onClick={() => addProductToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = ({ addedProduct, cart }) => {
  return {
    addedProduct,
    cart
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
