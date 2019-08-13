import React from 'react';
import AdminNavBar from './AdminNavbar';
import { Route } from 'react-router-dom'
import UsersTable from './UsersTable';
import ProductsTable from './ProductsTable'

const AdminCP = () => {
  return (
    <div>
      <h1>Admin Control Panel</h1>
      <AdminNavBar />
      <div>
        <Route path='/admincp/users' component={UsersTable} />
        <Route path='/admincp/products' component={ProductsTable} />
      </div>
    </div>
  );
};

export default AdminCP;
