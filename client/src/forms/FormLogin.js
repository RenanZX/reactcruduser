import React, { Component } from "react";
import { Button, Form } from 'semantic-ui-react'
import { Redirect } from "react-router-dom";

class FormLogin extends Component {
  constructor(props) {
    super(props);   
    this.onChangeName = this.onChangeName.bind(this)
    this.onChangeSenha = this.onChangeSenha.bind(this)

    this.state = {
      name: '',
      senha: '',
      logado: false,
      loading: false,
      errors: ''
    }
  }

  onChangeName(e){
    this.setState({
      name: e.target.value
    })
  }

  onChangeSenha(e){
    this.setState({
      senha: e.target.value
    })
  }

  onSubmit = () => {
    fetch('/User?nome='+this.state.name+"&senha="+this.state.senha)
    .then(() => {
      alert('Login realizado com sucesso!')
      this.setState({ logado: true });
    })
    .catch(error => {
      this.setState({ errors: error.toString() })
      console.log("Erro de autenticacao: "+ error.toString())
    })
  }

  render() {
    const { logado } = this.state;
    if(!logado){
      return(
      <Form onSubmit={this.onSubmit}>
        <Form.Field>
          <label>Nome</label>
          <input placeholder='Nome' 
            id='nome' 
            name='nome' 
            value={this.state.name} 
            onChange={this.onChangeName}/>
        </Form.Field>
        <Form.Field>
          <label>Senha</label>
          <input placeholder='Senha'
           id='senha' 
           name='senha' 
           value={this.state.senha}
           onChange={this.onChangeSenha}/>
        </Form.Field>
        <Button type='submit'>Login</Button>
      </Form>
    );
    }else{
      return <Redirect to='/'/>
    }
  }

}

export default FormLogin;