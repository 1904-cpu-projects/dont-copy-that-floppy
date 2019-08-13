import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

class UserProfile extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    const user = this.props.loggedInUser
    console.log(user)
    return (
      <div>
        First Name: {user.firstName}
        <br />
        Last Name: {user.lastName}
        <br />
        Email: {user.email}
        <br />
        <Link to='/editprofile'><button>Edit Profile</button></Link>
      </div>
    );
  }
}

const mapStateToProps = ({loggedInUser}) => {
  return {
    loggedInUser
  }
}

export default connect(mapStateToProps)(UserProfile);
