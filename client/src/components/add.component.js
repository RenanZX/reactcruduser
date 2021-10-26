import React from 'react'
import FormCadastro from '../forms/FormCadastro';

class AddUser extends React.Component {
  render() {
    return(
      <div className="AddUser">
        <FormCadastro/>
      </div>
    );
  }
}

export { AddUser }