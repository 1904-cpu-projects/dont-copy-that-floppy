import React from 'react';
import { connect } from 'react-redux';
import SingleProduct from './SingleProduct';

const Products = ({ products }) => {
  return (
    <div className="card-deck">
      {products.map(product => (
        <SingleProduct product={product} key={product.id} />
      ))}
    </div>
  );
};

const mapStateToProps = ({ products }) => {
  return {
    products
  };
};

export default connect(mapStateToProps)(Products);
