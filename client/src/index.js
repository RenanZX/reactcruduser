import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AddUser } from './components/add.component.js';
import { ListUser } from './components/list.component.js';
import { Login } from './components/login.component.js';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route, browserHistory } from 'react-router-dom';
import { Edit } from './components/edit.component';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' exact={true} component={App} />
      <Route path='/AddUser' component={AddUser} />
      <Route path='/ListUsers' component={ListUser} />
      <Route path='/Login' component={Login} />
      <Route path='/Edit' component={Edit} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
