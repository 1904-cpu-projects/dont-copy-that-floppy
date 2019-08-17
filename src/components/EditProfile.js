import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

class EditProfile extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      firstName: props.loggedInUser.firstName,
      lastName: props.loggedInUser.lastName,
      email: props.loggedInUser.email
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    await axios.put(`/api/users/${this.props.loggedInUser.id}`, this.state);
  }

  render () {
    const { handleChange, handleSubmit } = this;
    const { firstName, lastName, email } = this.state;
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            First Name
            <input type='text' name='firstName' onChange={event => handleChange(event)} value={firstName}/>
          </label>
          <br />
          <label>
            Last Name
            <input type='text' name='lastName' onChange={event => handleChange(event)} value={lastName}/>
          </label>
          <br />
          <label>
            Email
            <input type='text' name='email' onChange={event => handleChange(event)} value={email}/>
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
