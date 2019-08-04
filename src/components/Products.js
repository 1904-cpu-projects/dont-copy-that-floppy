import React from 'react';
import { connect } from 'react-redux';
import SingleProduct from './SingleProduct';

const Products = ({ products }) => {
  console.log(products);
  return (
    <div className="card-deck">
      {products.map(product => {
        console.log('product is ', product);
        return <SingleProduct product={product} />;
      })}
    </div>
  );
};

const mapStateToProps = ({ products }) => {
  return {
    products
  };
};

export default connect(mapStateToProps)(Products);
