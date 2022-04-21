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
    fetch("https://randomuser.me/api/?results=10")
      .then((resp) => resp.json())
      .then((json) => {
        this.setState({
          persons: json.results,
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
                <td>{person.name.first}</td>
                <td>{person.name.last}</td>
                <td>
                  {person.location.street.number && person.location.street.name}
                </td>
                <td>{person.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
