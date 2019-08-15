import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../store';
import SingleProduct from './SingleProduct';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      searchItem: ''
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.reset = this.reset.bind(this);
  }

  handleSearch(ev) {
    event.preventDefault();
    this.setState({searchItem: ev.target.searchItem.value});
    this.props.history.push(`/products/search/${this.state.searchItem}`);
    ev.target.searchItem.value = '';
  }

  reset(ev) {
    event.preventDefault();
    this.setState({searchItem: ''}) ;
    this.props.history.push(`/products`);
  }

  render() {
    const { searchItem } = this.state;
    const { handleSearch, reset } = this;
    const {
      products,
      user,
      loggedInUser,
      handleLogout,
      cart
    } = this.props;

    return (
      <header className="section-header">
        <section className="header-main shadow-sm">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-3 col-sm-4">
                <div className="brand-wrap">
                  <img className="logo"
                    style={{ width: 100, height: 100 }}
                    src="https://i.imgur.com/BOdXYeP.png"
                  />
                  <h2 className="logo-text">Floppy Shoppy</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-xl-5 col-sm-8">
              <form onSubmit={handleSearch} className="search-wrap">
                <input type="text" name="searchItem" />
                <button>Search</button>
                <button onClick={reset}>Clear Result</button>
              </form>
            </div>
            <div className="col-lg-5 col-xl-4 col-sm-12">
              <div className="">
                <Link to="/">Home</Link>
                <Link to="/products">Products ({products.length})</Link>
                <Link to="/cart">Cart ({cart.length})</Link>
                <Link to="/userprofile">{loggedInUser.email ? 'My Profile' : ''}</Link>
                <Link to="/login">
                  {loggedInUser.email ? (
                    <button onClick={() => handleLogout()}>
                      Logout {loggedInUser.email}
                    </button>
                  ) : (
                    `Login`
                  )}
                </Link>
                <Link to="/signup">{!loggedInUser.email ? 'Sign Up' : ''}</Link>

                {loggedInUser.isAdmin && <Link to='/admincp'>Admin Control Panel</Link>}
              </div>
            </div>
            <div id="floppy-search-items">
              {products.filter(
                  product => product.name.toLowerCase() === searchItem.toLowerCase()
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
          </div>
        </section>
      </header>
    );
  }
}

const mapStateToProps = ({ products, user, loggedInUser, cart }) => {
  return {
    products,
    user,
    loggedInUser,
    cart,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleLogout: function(ev) {
      event.preventDefault();

      dispatch(logoutUser());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
