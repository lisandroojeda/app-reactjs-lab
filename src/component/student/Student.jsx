import React from "react";
import "./Student.css";
const Student = () => {
  const student = {
    name: "Lisandro",
    lastName: "Ojeda Fernandez",
    age: 35,
    email: "l.ojedafernandez@gmail.com",
    phone: "+540292015323027",
  };

  return <div className="container div-container">
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
  </div>;
};

export default Student;
