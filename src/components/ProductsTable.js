import React from 'react';
import { connect } from 'react-redux';
import { removeProduct } from '../store';
import { Link } from 'react-router-dom'

const ProductsTable = ({ products, deleteProduct }) => {
  return (
    <div>
      <form>
      <table>
        <tbody>
          <tr>
            <th>Product Name</th>
            <th>Product ImageUrl</th>
            <th>Price</th>
            <th>Brand</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Edit Product</th>
            <th>Delete Product</th>
          </tr>
          {products.map(product => {
            return (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.imageUrl}</td>
                <td>{product.price}</td>
                <td>{product.brand}</td>
                <td>{product.description}</td>
                <td>{product.quantity}</td>
                <td>
                  <Link to={`/admincp/products/${product.id}`}>Edit Product </Link>
                </td>
                <td>
                  <button type="submit" onClick={() => deleteProduct(product.id)}>
                    Delete Product
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </form>
    </div>
  );
};

const mapStateToProps = ({ products }) => {
  return {
    products
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteProduct: productId => dispatch(removeProduct(productId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsTable);
