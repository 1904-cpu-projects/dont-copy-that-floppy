import React from 'react'
import { connect } from 'react-redux'
import { newProduct } from '../store';

class CreateProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      imageUrl: '',
      price: '',
      brand: '',
      description: '',
      quantity: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(ev) {
    this.setState({ [ev.target.name]: ev.target.value });
  }

  onSubmit(ev) {
    ev.preventDefault()
    const { addProduct } = this.props
    addProduct(this.state)
  }

  render() {
  const {name, imageUrl, price, brand, description, quantity} = this.state
    const { onChange, onSubmit } = this;
    return (
      <div>
        <h1>Create A New Product</h1>
        <form>
          <input name="name" value={name} onChange={onChange} />
          <input
            name="imageUrl"
            value={imageUrl}
            onChange={onChange}
          />
          <input
            name="price"
            value={price}
            onChange={onChange}
          />
          <input
            name="brand"
            value={brand}
            onChange={onChange}
          />
          <textarea
            name="description"
            rows="4"
            cols="50"
            value={description}
            onChange={onChange}
          />
          <input
            name="quantity"
            value={quantity}
            onChange={onChange}
          />
          <button type="submit" onClick={onSubmit}>
            Add a New Product
          </button>
        </form>
      </div>
    )
}
}

const mapDispatchToProps = dispatch => {
  return {
    addProduct: product => dispatch(newProduct(product))
  }
}

export default connect(null, mapDispatchToProps)(CreateProduct)
