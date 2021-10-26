import './App.css';
import { Link } from "react-router-dom";
import React from 'react';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <ul className="ulist">
          <li><Link to='/AddUser'> Cadastro</Link></li>
          <li><Link to='/Login'> Login</Link></li>
          <li><Link to='/ListUsers'> ListUsers</Link></li>
        </ul>
      </div>
    );
  }
}

export default App;
