import React from 'react';
import AdminNavBar from './AdminNavbar';
import { Route } from 'react-router-dom'
import UsersTable from './UsersTable';
import ProductsTable from './ProductsTable'
import ProductsTableForm from './ProductsTableForm';
import CreateProduct from './CreateProduct'

const AdminCP = () => {
  return (
    <div>
      <h1>Admin Control Panel</h1>
      <AdminNavBar />
      <div>
        <Route path='/admincp/users' component={UsersTable} />
        <Route exact path='/admincp/products' component={ProductsTable} />
        <Route exact path='/admincp/products/:id' component={ProductsTableForm}/>
        <Route exact path='/admincp/create' component={CreateProduct} />
      </div>
    </div>
  );
};

export default AdminCP;
