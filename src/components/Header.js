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
    this.setState({ searchItem: ev.target.searchItem.value });
    this.props.history.push(`/products/search/${this.state.searchItem}`);
    ev.target.searchItem.value = '';
  }

  reset(ev) {
    event.preventDefault();
    this.setState({ searchItem: '' });
    this.props.history.push(`/products`);
  }

  render() {
    const { searchItem } = this.state;
    const { handleSearch, reset } = this;
    const { products, user, loggedInUser, handleLogout, cart } = this.props;
    const {pathname} = this.props.location;

    return (
      <header className="section-header">
        <nav className="navbar navbar-top navbar-expand-lg navbar-dark bg-secondary">
          <div className="container">
            <button className="navbar-toggler" type="button">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarsExample07">
              <ul className="navbar-nav mr-auto">
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a href="https://www.google.com/search?q=what+are+vintage+electronics???" target="_blank" className="nav-link">Help</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false">Language</a>
                  <ul className="dropdown-menu dropdown-menu-right">
                    <li>
                      <a href="/#" className="dropdown-item">
                        English
                    </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <section className="header-main shadow-sm">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-3 col-sm-4">
                <div className="brand-wrap" style={{display: 'flex', alignContent: 'center', alignItems: 'center', justifyContent: 'center', justifyItems: 'center', padding: 10}}>
                  <img
                    className="logo"
                    style={{ width: 125, height: 125, padding: 10, margin: 10 }}
                    src="https://i.imgur.com/BOdXYeP.png"
                  />
                  <h2 className="logo-text">Floppy Shoppy</h2>
                </div>
              </div>
              <div className="col-lg-4 col-xl-5 col-sm-8">
                <form onSubmit={handleSearch} className="search-wrap">
                  <div className="input-group w-100">
                    <input type="text" name="searchItem" className="form-control" style={{ width: 55 }} placeholder="Search" />
                    <div className="input-group-append">
                      <button className="btn btn-primary">
                        Go
                        <i className="fa fa-search" />
                      </button>
                      <button onClick={reset} className="btn btn-primary">Clear</button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-lg-5 col-xl-4 col-sm-12">
                <div className="">
                  <Link to="/" className={pathname === '/' ? 'badge badge-primary' : ''}>Home</Link>{' '}
                  <Link to="/cart" className={pathname === '/cart' ? 'badge badge-primary' : ''}>Cart({cart.length})</Link>{' '}
                  <Link to="/userprofile" className={pathname === '/userprofile' ? 'badge badge-primary' : ''}>
                    {loggedInUser.email ? 'My Profile' : ''}
                  </Link>{' '}
                  <Link to="/signup" className={pathname === '/signup' ? 'badge badge-primary' : ''}>{!loggedInUser.email ? 'Sign Up' : ''}</Link>{' '}
                  {loggedInUser.email && (<Link to="/orders" className={pathname === '/orders' ? 'badge badge-primary' : ''}>Order History</Link>)}
                  {loggedInUser.isAdmin && (
                    <Link to="/admincp" className={pathname === '/admincp' ? 'badge badge-primary' : ''}>Admin Control Panel</Link>
                  )}
                  <Link to="/login" className={pathname === '/login' ? 'badge badge-primary' : ''}>
                    {' '}
                    {loggedInUser.email ? (
                      <button className="btn btn-primary" onClick={() => handleLogout()}>
                        Logout {loggedInUser.email}
                      </button>
                    ) : (
                        `Login`
                      )}
                  </Link>
                </div>
              </div>
            </div>
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
    cart
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleLogout: function (ev) {
      event.preventDefault();

      dispatch(logoutUser());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
