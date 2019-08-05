import React from 'react';
import { connect } from 'react-redux';
import SingleProduct from './SingleProduct';

const Products = ({ products }) => {
  const style = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: '2em'
  };
  return (
    <div className="container" style={{ ...style, margin: 'auto' }}>
      <div style={style}>
        {products.map(product => (
          <SingleProduct product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = ({ products }) => {
  return {
    products
  };
};

export default connect(mapStateToProps)(Products);
