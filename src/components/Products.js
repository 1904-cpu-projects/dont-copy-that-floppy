import React from 'react';
import { connect } from 'react-redux';
import SingleProduct from './SingleProduct';

const Products = props => {
  const { products, id } = props;
  const style = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: '2em'
  };
  return (
    <div className="container" style={{ ...style, margin: 'auto' }}>
      <div style={style}>
        {id
          ? products
              .filter(product => id === product.categoryId)
              .map(product => (
                <SingleProduct product={product} key={product.id} />
              ))
          : products.map(product => (
              <SingleProduct product={product} key={product.id} />
            ))}
      </div>
    </div>
  );
};

const mapStateToProps = ({ products }, ownProps) => {
  const { id } = ownProps.match.params;
  return {
    products,
    id
  };
};

export default connect(mapStateToProps)(Products);
