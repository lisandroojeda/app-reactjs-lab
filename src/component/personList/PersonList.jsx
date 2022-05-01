import React, { Component } from "react";

export default class PersonList extends Component {
  constructor(props) {
    super(props);
    this.clearList = this.clearList.bind(this);
    this.getListPersons = this.getListPersons.bind(this);
    this.state = {
      persons: [],
    };
  }

  getListPersons() {
    fetch("http://localhost:1234/personas")
      .then((resp) => resp.json())
      .then((json) => {
        this.setState({
          persons: json.personas,
          result: json.result,
        });
      });
  }

  getListPersonsId() {
    fetch("http://localhost:1234/personas")
      .then((resp) => resp.json())
      .then((json) => {

        let person = document.getElementById()
        this.setState({
          persons: json.personas,
          result: json.result,
        });
      });
  }

  clearList() {
    this.setState({
      persons: [],
    });
  }
  render() {
    return (
      <div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.getListPersons}
        >
          Listar Personas
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.clearList}
        >
          Limpiar Lista
        </button>
        <h1>Listado de Personas</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Direccion</th>
              <th>Telefonos</th>
            </tr>
          </thead>
          <tbody>
            {this.state.persons.map((person, index) => (
              <tr>
                <td>{person.nombre}</td>
                <td>{person.apellido}</td>
                <td>{person.direccion && person.direccion.direccion}</td>
                <td>{person.telefonos && person.telefonos[0].numero}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
