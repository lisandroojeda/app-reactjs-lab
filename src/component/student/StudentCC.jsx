import React, { Component } from "react";
import "./Student.css";
let student = {
  name: "Lisandro",
  lastName: "Ojeda Fernandez",
  age: 35,
  email: "l.ojedafernandez@gmail.com",
  phone: "+540292015323027",
};
export default class StudentCC extends Component {
  render() {
    return (
      <div className="container div-container">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <ul>
                <li>Nombre: {student.name}</li>
                <li>Apellido: {student.lastName}</li>
                <li>Edad: {student.age}</li>
                <li>Email: {student.email}</li>
                <li>Telefono: {student.phone}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
