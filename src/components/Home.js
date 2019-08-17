import React from 'react';
import { connect } from 'react-redux';

const Home = ({ loggedInUser }) => {
  return (
    <div>
      <div>
        Welcome!{' '}
        {loggedInUser.email
          ? `${loggedInUser.firstName} ${loggedInUser.lastName}`
          : ''}
      </div>
    </div>
  );
};

const mapStateToProps = ({ loggedInUser }) => {
  return {
    loggedInUser
  };
};

export default connect(mapStateToProps)(Home);
