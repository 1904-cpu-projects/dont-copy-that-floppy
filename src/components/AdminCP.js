import React from 'react';
import AdminNavBar from './AdminNavbar';
import { Route } from 'react-router-dom'
import UsersTable from './UsersTable';

const AdminCP = () => {
  return (
    <div>
      <h1>Admin Control Panel</h1>
      <AdminNavBar />
      <div>
        <Route path='/admincp/users' component={UsersTable} />
      </div>
    </div>
  );
};

export default AdminCP;
