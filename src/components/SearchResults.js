import React from 'react';
import { connect } from 'react-redux';
import SingleProduct from './SingleProduct'

const SearchResults = ({ products }) => {
  return (
    <div id="floppy-search-items">
      {products.filter(
        product =>
          product.name.toLowerCase() === searchItem.toLowerCase()
      ).length !== 0
        ? products
          .filter(
            product =>
              product.name.toLowerCase() === searchItem.toLowerCase()
          )
          .map(product => (
            <SingleProduct product={product} key={product.id} />
          ))
        : ''}
    </div>
  )
}

const mapStateToProps = ({ products }) => {
  return {
    products,
  };
};

export default connect(mapStateToProps)(SearchResults);
