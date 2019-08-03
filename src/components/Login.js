import React from 'react';

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

  handleSubmit (event) {
    event.preventDefault();
    //leaving this as just a console log for now
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Username
            <input type='text' name='username' value={this.username} onChange={this.handleChange}/>
          </label>
          <br />
          <label>
            Password
            <input type='text' name='password' value={this.password} onChange={this.handleChange}/>
          </label>
          <br />
          <button type='submit'>Log In</button>
        </form>
      </div>
    )
  }
}

export default Login
