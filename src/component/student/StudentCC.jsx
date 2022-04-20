import React, { Component, State } from "react";
import Signatures from "../signature/Signatures";

import "./Student.css";

export default class StudentCC extends Component {
  constructor(props) {
    super(props);
    this.state = [
      {
        nombreCurso: "Un Curso cualquiera",
        cantidadDeHoras: "10 horas Semanales",
      },
    ];
  }

  handleCardClick = () => {
    console.log("aprete");
  };

  render() {
    return (
      <div className="container div-container">
        <div className="row">
          <div className="col-md-12">
            <div className="card" onClick={this.handleCardClick}>
              <ul>
                <li>Nombre: {this.props.student.name}</li>
                <li>Apellido: {this.props.student.lastName}</li>
                <li>Edad: {this.props.student.age}</li>
                <li>Email: {this.props.student.email}</li>
                <li>Telefono: {this.props.student.phone}</li>
              </ul>
            </div>
          </div>
          <div className="col-md-12">
            <Signatures
              name={this.props.student.name}
              lastName={this.props.student.lastName}
            />
          </div>
        </div>
      </div>
    );
  }
}
