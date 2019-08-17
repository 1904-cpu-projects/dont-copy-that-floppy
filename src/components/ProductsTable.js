import React from 'react';
import { connect } from 'react-redux';
import { removeProduct } from '../store';

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
            <th>Is Available</th>
            <th>Edit Product</th>
            <th>Delete Product</th>
          </tr>
          {products.map(product => {
            return (
              <tr key={product.id}>
                <td><input name="name" defaultValue={product.name} /></td>
                <td><input name="imageUrl" defaultValue={product.imageUrl} /></td>
                <td><input name="price" defaultValue={product.price} /></td>
                <td><input name="brand"defaultValue={product.brand} /></td>
                <td><textarea name="description" rows="4" cols="50" defaultValue={product.description} /></td>
                <td><input name="quantity" defaultValue={product.quantity} /></td>
                <td><select name="isAvailable" defaultValue={product.isAvailable}>
                  <option value={true}>True</option>
                  <option value={false}>False</option>
                    </select>
                </td>
                <td>
                  <button type="submit" onClick={(ev) => {
                    console.log(ev.target)
                  }}>
                  Edit Product
                  </button>
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
