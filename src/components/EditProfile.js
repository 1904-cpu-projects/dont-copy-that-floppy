import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

class EditProfile extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    const user = this.props.loggedInUser
    return (
      <div>
        <form>
          <label>
            First Name
            <input type='text' defaultValue={user.firstName} />
          </label>
          <br />
          <label>
            Last Name
            <input type='text' defaultValue={user.lastName} />
          </label>
          <br />
          <label>
            Email
            <input type='text' defaultValue={user.email} />
          </label>
          <br />
          <button type='submit'>Submit</button><Link to='/userprofile'><button>Cancel</button></Link>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({loggedInUser}) => {
  return {
    loggedInUser
  }
}

export default connect(mapStateToProps)(EditProfile);
