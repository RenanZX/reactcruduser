import React from 'react'
import FormLogin from '../forms/FormLogin';

class Login extends React.Component {
  render() {
    return(
      <div className="Login">
        <FormLogin/>
      </div>
    );
  }
}

export { Login }