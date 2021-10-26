# CRUD simples React app

Aplicação web simples de CRUD usando react

## Instruções de Instalação e configuracao

Primeiramente é necessário fazer a instalação das aplicações necessarias:

* [Node.js](https://nodejs.org/en/)
* [Postgresql](https://www.postgresql.org/download/)

Após isso vá até a raiz do projeto, e digite o comando ```npm run install-all```, este comando
irá instalar todas as dependências necessárias para a aplicação funcionar.

### Configurando banco de dados

Entre no terminal do postgres, e digite o comando:

- ```create database "crud_test"```

Isso criará o nosso banco de dados, agora se conecte com ele usando o comando ```\c crud_test``` e rode
o arquivo sql presente no projeto usando o comando ```\i sgbd-config/manager-db.sql```.

## Instruções para execução

Digite o comando ```npm run dev``` e pronto, será aberto uma nova página web e a aplicação estará funcionando.