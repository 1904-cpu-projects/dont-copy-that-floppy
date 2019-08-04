import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (event) {
    this.setState({[event.target.name]: event.target.value})
  }

  async handleSubmit (event) {
    event.preventDefault();
    const response = await axios.post('/login', this.state)
    if (response.status === 201) {

    }
  }

  render() {
    const { username, password } = this.state
    const { handleChange, handleSubmit } = this
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Username
            <input type='text' name='username' value={username} onChange={handleChange}/>
          </label>
          <br />
          <label>
            Password
            <input type='text' name='password' value={password} onChange={handleChange}/>
          </label>
          <br />
          <button type='submit'  >Log In</button>
        </form>
      </div>
    )
  }
}

export default connect()(Login)
