import React, { Component  } from 'react';
import '../../App.css';
import Appheader from '../../componentes/appHeader';
import axios from 'axios';
import { Table } from 'reactstrap';

export default class Cuentas extends  Component{
  constructor(props){
    super(props);
    this.state = {
      lista:[]
    }
  }

  componentDidMount(){

    axios.get('http://localhost:8000/User').then(response=>{
      this.setState({lista:response.data})
    }).catch(error=>{
      alert("Error "+error)
    })
 }
  renderList(){
  return this.state.lista.map((data)=>{
    return(
      <tr>
        <td>{data.id}</td>
        <td>{data.name}</td>
        <td>{data.email}</td>
      </tr>
    )

  })

}
render() {
  return (
      <div>
            <div className="cuenta">
            <Appheader/>
            <div> Administrador de cuentas</div>
             <div class="container">
             <Table bordered>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
    </div>
    </div>
    </div>
  );
}
}