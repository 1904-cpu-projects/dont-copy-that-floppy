import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { loginUser } from '../store';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      error: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const response = await axios.post('/login', this.state);
    if (response.status === 201) {
      this.props.userLogin();
      this.setState({ error: '' });
    } else if (response.status === 203) {
      this.setState({ error: response.data });
    }
  }

  render() {
    const { email, password, error } = this.state;
    const { handleChange, handleSubmit } = this;
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Email
            <input
              type="text"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Password
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </label>
          <br />
          <button type="submit">Log In</button>
        </form>
        {error ? <h4>{error}</h4> : ''}
      </div>
    );
  }
}

const stateToProps = ({ loggedInUser }) => {
  return {
    loggedInUser
  };
};

const dispatchToProps = dispatch => {
  return {
    userLogin: () => dispatch(loginUser())
  };
};

export default connect(
  stateToProps,
  dispatchToProps
)(Login);
