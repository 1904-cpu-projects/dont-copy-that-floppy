import React from 'react';
import { connect } from 'react-redux';

class EditProfile extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    const user = this.props.loggedInUser
    return (
      <div>
        Add edit profile details here
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
