import React from 'react'
import { Link } from 'react-router-dom'

const AdminNavBar = () => {
  return (
    <div>
      <Link to='/admincp/users'>Users Table</Link>
      <Link to='/admincp/products'>Products Table</Link>
    </div>
  )
}

export default AdminNavBar
