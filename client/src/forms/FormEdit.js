import React, { Component } from "react";
import { Button, Form } from 'semantic-ui-react'
import { Redirect } from "react-router-dom";

class FormEdit extends Component {
  constructor(props) {
    super(props);   
    this.onChangeName = this.onChangeName.bind(this)
    this.onChangeSenha = this.onChangeSenha.bind(this)

    this.state = {
      id: 0,
      nome: '',
      senha: '',
      editado: false,
      errors: ''
    }
  }

  componentDidMount() {
    let id = window.location.search.substr(1).split('=')[1]
    console.log('url: /UserId?id='+id)
    fetch('/UserId?id='+id)
    .then(res => res.json())
    .then(jsondata => {
      this.setState({ id: jsondata[0], nome: jsondata[1], senha: jsondata[2]})
    })
  }

  onChangeName(e){
    this.setState({
      nome: e.target.value
    })
  }

  onChangeSenha(e){
    this.setState({
      senha: e.target.value
    })
  }

  onSubmit = () => {
    fetch('/UserEdit?id='+this.state.id+'&nome='+this.state.nome+"&senha="+this.state.senha)
    .then(res => {
      alert('Usuario Editado com Sucesso!')
      this.setState({ editado: true });
    })
    .catch(error => {
      this.setState({ errors: error.toString() })
      console.log("Erro de autenticacao: "+ error.toString())
    })
  }

  render() {
    const { editado } = this.state;
    if(!editado){
      return(
      <Form onSubmit={this.onSubmit}>
        <Form.Field>
          <label>Nome</label>
          <input placeholder='Nome' 
            id='nome' 
            name='nome' 
            value={this.state.nome} 
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
        <Button type='submit'>Editar</Button>
      </Form>
    );
    }else{
      return <Redirect to='/'/>
    }
  }

}

export default FormEdit;