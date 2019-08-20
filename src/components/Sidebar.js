import React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Carousel from './Carousel';
import Products from './Products';
import Cart from './Cart';
import Checkout from './Checkout';
import SignUp from './SignUp';
import Login from './Login';
import OrderConfirmation from './OrderConfirmation';
import OrderHistory from './OrderHistory';
import UserProfile from './UserProfile';
import EditProfile from './EditProfile';


const Sidebar = props => {
  const { categories } = props;
  return (
    <section className="section-main bg padding-top-sm">
      <div className="container" style={{ display: 'flex' }}>
        <aside className="col-md-3" style={{ paddingTop: '15px' }}>
          <div className="card">
            <header className="card-header bg-secondary text-white">
              Categories
            </header>
            <ul className="list-group">
              <Link to="/products">
                <li className="list-group-item">All Products</li>
              </Link>
              {categories.map(category => {
                return (
                  <Link
                    key={category.id}
                    to={`/products/category/${category.id}`}
                  >
                    <li className="list-group-item">{category.name}</li>
                  </Link>
                );
              })}
            </ul>
          </div>
        </aside>
        <HashRouter>
          <Route path="/" exact component={Carousel} />
          <Route path="/cart" component={Cart} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/products/category/:id" component={Products} />
          <Route path="/products" exact component={Products} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route path="/products/search/:name" />
          <Route path="/orderconfirmation/:id" component={OrderConfirmation} />
          <Route path = "/orders" component={OrderHistory}/>
          <Route path="/userprofile" component={UserProfile} />
          <Route path="/editprofile" component={EditProfile} />
        </HashRouter>
      </div>
    </section>
  );
};

const mapStateToProps = ({ categories }) => {
  return {
    categories
  };
};

export default connect(mapStateToProps)(Sidebar);
