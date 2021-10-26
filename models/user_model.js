Pool = require('pg').Pool

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'crud_test',
  password: 'postgres',
  port: 5432
})

function getUser(nome, senha){
  return new Promise(function(resolve, reject){
    pool.query('SELECT * FROM user_crud where "nome" = $1 and "senha" = $2', [nome, senha], function(err, result) {
      if(err){
        return reject(err);
      }
      var user = [result.rows[0]['id'],result.rows[0]['nome'], result.rows[0]['senha']]
      resolve(user)
    })
  })
}

function getUserById(id){
  return new Promise(function(resolve, reject){
    pool.query('SELECT * FROM user_crud where id = '+id, function(err, result) {
      if(err){
        return reject(err);
      }
      var user = [result.rows[0]['id'],result.rows[0]['nome'], result.rows[0]['senha']]
      resolve(user)
    })
  })
}

function getUsers(){
  return new Promise(function(resolve, reject){
    pool.query("SELECT * FROM user_crud", function(err, result) {
      if(err){
        return reject(err);
      }
      users = []
      for(i=0; i < result.rows.length && result.rows != null; i++){
        console.log('nome:'+result.rows[0]['nome']+'senha:'+result.rows[0]['senha'])
        var us = [result.rows[i]['id'],result.rows[i]['nome'], result.rows[i]['senha']]
        users.push(us)
      }
      resolve(users)
    })
  })
}

function deleteUser(id){
  return new Promise(function(resolve, reject){
    pool.query('DELETE FROM user_crud where "id" = $1', id , function(err, result){
      if(err){
        reject(err)
      }
      resolve('Usuario deletado com sucesso!')
    })
  })
}

function editUser(id, nome, senha){
  return new Promise(function(resolve, reject){
    pool.query("UPDATE user_crud set nome = $2, senha = $3 where id = $1",[id,nome,senha], function(err, result){
      if(err){
        reject(err)
      }
      resolve('Usuario editado com sucesso!')
    })
  })
}

async function InsertUser(body) {
  const client = await pool.connect();
  const{nome, senha} = body;
  client.query('INSERT INTO user_crud (nome, senha) VALUES ($1, $2)', [nome, senha]);
  client.release();
  console.log('Um novo usuario foi inserido com sucesso!');
}

module.exports = {
  getUser,
  getUsers,
  InsertUser,
  deleteUser,
  editUser,
  getUserById
}