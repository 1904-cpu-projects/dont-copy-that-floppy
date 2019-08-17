import React from 'react';
import { connect } from 'react-redux';

const Home = ({ loggedInUser }) => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column'}}>
      <h2>
        Welcome,{' '}
        {loggedInUser.email
          ? `${loggedInUser.firstName} ${loggedInUser.lastName}`
          : ''}!
      </h2>
    </div>
  );
};

const mapStateToProps = ({ loggedInUser }) => {
  return {
    loggedInUser
  };
};

export default connect(mapStateToProps)(Home);
