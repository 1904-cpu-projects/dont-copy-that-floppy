import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Sidebar = ({ categories }) => {
  return (
    <section className="section-main bg padding-top-sm">
      <div className="container">
        <aside className="col-md-3">
          <div className="card">
            <header className="card-header bg-secondary white">
              <i className="icon-menu" /> Categories
            </header>
            <ul className="menu-category">
              <Link to="/products">
                <li>All Products</li>
              </Link>
              {categories.map(category => {
                return (
                  <Link
                    key={category.id}
                    to={`/products/category/${category.id}`}
                  >
                    <li>{category.name}</li>
                  </Link>
                );
              })}
            </ul>
          </div>
        </aside>
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
