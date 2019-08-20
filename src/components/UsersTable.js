import React from 'react';
import { connect } from 'react-redux';
import { deleteUser } from '../store';
import axios from 'axios';

const UsersTable = ({ users, removeUser }) => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Admin</th>
            <th>Delete User</th>
          </tr>
          {users.map(user => {
            return (
              <tr key={user.id}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>
                  <select
                    defaultValue={user.isAdmin}
                    onChange={async ev => {
                      await axios.put(`/api/users/${user.id}`, {
                        isAdmin: ev.target.value
                      });
                    }}
                  >
                    <option value={true}>True</option>
                    <option value={false}>False</option>
                  </select>
                </td>
                <td>
                  <button type="submit" onClick={() => removeUser(user.id)}>
                    Delete User
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = ({ users }) => {
  return {
    users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeUser: userId => dispatch(deleteUser(userId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersTable);
