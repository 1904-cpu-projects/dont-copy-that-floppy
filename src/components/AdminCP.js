import React from 'react';
import AdminNavBar from './AdminNavbar';
import { Route } from 'react-router-dom'
import UsersTable from './UsersTable';
import ProductsTable from './ProductsTable'
import ProductsTableForm from './ProductsTableForm';

const AdminCP = () => {
  return (
    <div>
      <h1>Admin Control Panel</h1>
      <AdminNavBar />
      <div>
        <Route path='/admincp/users' component={UsersTable} />
        <Route exact path='/admincp/products' component={ProductsTable} />
        <Route path='/admincp/products/:id' component={ProductsTableForm}/>
      </div>
    </div>
  );
};

export default AdminCP;
