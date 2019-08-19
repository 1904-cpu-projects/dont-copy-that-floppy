import React from 'react';
import { connect } from 'react-redux';
import { editProduct } from '../store';

class ProductsTableForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.product.name,
      imageUrl: props.product.imageUrl,
      price: props.product.price,
      brand: props.product.brand,
      description: props.product.description,
      quantity: props.product.quantity
    };
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChange(ev) {
    this.setState({ [ev.target.name]: ev.target.value });
  }
  
  onClick(ev) {
    ev.preventDefault();
    const { history, changeProduct, product, loadProducts } = this.props;
    changeProduct(product.id, this.state);
    window.location.hash = '/admincp/products'
  }
  render() {
    const {name, imageUrl, price, brand, description, quantity} = this.state
    const { product } = this.props;
    const { onChange, onClick } = this;
    return (
      <div>
        <h1>Edit Product - {product.name} </h1>
        <form>
          <input name="name" defaultValue={name} onChange={onChange} />
          <input
            name="imageUrl"
            defaultValue={imageUrl}
            onChange={onChange}
          />
          <input
            name="price"
            defaultValue={price}
            onChange={onChange}
          />
          <input
            name="brand"
            defaultValue={brand}
            onChange={onChange}
          />
          <textarea
            name="description"
            rows="4"
            cols="50"
            defaultValue={description}
            onChange={onChange}
          />
          <input
            name="quantity"
            defaultValue={quantity}
            onChange={onChange}
          />
          <button type="submit" onClick={onClick}>
            Update Product
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ products }, { match, history }) => {
  return {
    product: products.find(product => product.id === match.params.id),
    history
  };
};

const mapDistpatchToProps = dispatch => {
  return {
    changeProduct: (productId, product) => dispatch(editProduct(productId, product)),
  };
};

export default connect(
  mapStateToProps,
  mapDistpatchToProps
)(ProductsTableForm);
