import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Carousel from './Carousel';

const Sidebar = ({ categories }) => {
  return (
    <section className="section-main bg padding-top-sm">
      <div className="container" style={{ display: 'flex' }}>
        <aside className="col-md-3">
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
        <Carousel />
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
