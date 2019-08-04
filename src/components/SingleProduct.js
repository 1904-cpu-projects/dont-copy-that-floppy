import React from 'react';
import { Link } from 'react-router-dom';

const SingleProduct = ({ product }) => {
  console.log(product);
  return (
    <div className="card">
      <img
        className="card-img-top"
        src={product.imageUrl}
        alt="product image"
        height="50 px"
        width="50 px"
      />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text">{`$${product.price}`}</p>
        <Link to="/cart" className="btn btn-primary">
          Add to Cart
        </Link>
      </div>
    </div>
  );
};

export default SingleProduct;
