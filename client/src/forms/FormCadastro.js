import React, { Component } from "react";
import { Button, Form } from 'semantic-ui-react'
import { Redirect } from "react-router-dom";

class FormCadastro extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this)
    this.onChangeSenha = this.onChangeSenha.bind(this)

    this.state = {
      name: '',
      senha: '',
      cadastrado: false
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
    let nome = this.state.name;
    let senha = this.state.senha;

    fetch('/User', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({'nome':nome, 'senha':senha})
    }).then(response => {
      return response.text();
    }).then(data => {
      alert('Usuario cadastrado com sucesso!');
      this.setState({cadastrado: true});
    })
  }

  render() {
    const{cadastrado} = this.state;

    if(!cadastrado){
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
        <Button type='submit'>Cadastrar</Button>
      </Form>
      );
    }else{
      return <Redirect to='/'/>
    }
  }

}

export default FormCadastro;