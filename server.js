const express = require('express')
const proxy = require('http-proxy').createServer({})
const app = express()
const port = 3001

app.use(express.json())

const user_model = require('./models/user_model')

app.get('/', (req, res) => {
  res.status(200).send('Hello World!');
})

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});

app.get('/User', (req, res) => {
  user_model.getUser(req.query.nome, req.query.senha)
  .then(result => res.json(result))
  .catch(err => res.status(500).send(err))
})

app.get('/UserList', (req, res) => {
  user_model.getUsers()
  .then(result => res.json(result))
  .catch(err => res.status(500).send(err))
})

app.get('/UserDel', (req, res) => {
  user_model.deleteUser(req.query.id)
  .then(result => res.status(200).send(result))
  .catch(err => res.status(500).send(err))
})

app.get('/UserEdit', (req, res) => {
  user_model.editUser(req.query.id, req.query.nome, req.query.senha)
  .then(result => res.status(200).send(result))
  .catch(err => res.status(500).send(err))
})

app.post('/User', (req, res) => {
  res.json(req.body)
  user_model.InsertUser(req.body)
  res.status(200).send('Cadastro realizado com sucesso!')
})

app.get('/UserId', (req, res) => {
  user_model.getUserById(req.query.id)
  .then(result => res.status(200).send(result))
  .catch(err => res.status(500).send(err))
})

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})