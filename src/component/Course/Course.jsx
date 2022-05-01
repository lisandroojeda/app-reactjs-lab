import React, { Component } from "react";

export default class Course extends Component {
  constructor(props) {
    super(props);
    this.clearList = this.clearList.bind(this);
    this.getLisMaterias = this.getListMaterias.bind(this);
    this.state = {
      materias: [],
    };
  }

  getListMaterias() {
    fetch("http://localhost:1234/materias")
      .then((resp) => resp.json())
      .then((json) => {
        this.setState({
          materias: json.materias,
        });
      });
  }

  clearList() {
    this.setState({
      materias: [],
    });
  }
  render() {
    return (
      <div>
        <button type="button" className="btn btn-primary" onClick={this.getLisMaterias}>
          Listar Materias
        </button>
        <button type="button" className="btn btn-primary" onClick={this.clearList}>
          Limpiar Lista
        </button>
        <h1>Listado de materias</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Materia</th>
            </tr>
          </thead>
          <tbody>
            {this.state.materias.map((materia, index) => (
              <tr>
                <td>{materia.materia}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
