import React from 'react'
import './style.components/list.component.css';
import { Link } from 'react-router-dom'

class ListUser extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      list: []
    }
  }

  componentDidMount() {
    this.getList();
  }
  
  getList = () => {
    fetch('/UserList')
    .then(res => res.json())
    .then(list => this.setState({ list }))
  }

  render() {
    const { list } = this.state;

    return(
      <div className="List">
        <h1>List of Users</h1>
        {list.length ? (
          <div>
            <table>
              <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>Senha</th>
                <th>Edit</th>
                <th>Deletar</th>
              </tr>
            {list.map((item) => {
              return (
                <tr>
                  <td>{item[0]}</td>
                  <td>{item[1]}</td>
                  <td>{item[2]}</td>
                  <td><Link to={'/Edit?id='+item[0]}>edit</Link></td>
                  <td><a href={'http://localhost:3001/UserDel?id='+item[0]}>delete</a></td>
                </tr>
              );
            })}
            </table>
          </div>
        ) : (
          <div>
            <h2>No Users Found</h2>
          </div>
        )}
      </div>
    );
  }
}

export { ListUser }