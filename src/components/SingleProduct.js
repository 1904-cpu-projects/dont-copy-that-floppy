import React from 'react';
import { Link } from 'react-router-dom';

const SingleProduct = ({ product }) => {
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
        <Link to="/cart" className="btn btn-primary">
          Add to Cart
        </Link>
      </div>
    </div>
  );
};

export default SingleProduct;
