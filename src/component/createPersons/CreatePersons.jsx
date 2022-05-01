import React, { Component } from "react";

export default class CreatePersons extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      form: {
        nombre: "",
        apellido: "",
        direccion: "",
        telefono: "",
        localidad: "",
        materia: "",
      },
      resultado: "",
      localidades: [],
      materias: [],
    };
  }

  handleChange(e) {
    let nombre = e.target.name;
    let valor = e.target.value;

    this.setState((state) => ({
      form: {
        ...state.form,
        [nombre]: valor,
      },
    }));
  }
  handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:1234/personas", {
      method: "POST",
      body: JSON.stringify({
        nombre: this.state.form.nombre,
        apellido: this.state.form.apellido,
        direccion: this.state.form.direccion,
        telefonos: [this.state.form.telefono],
        localidad: this.state.form.localidad,
        materias: [this.state.form.materia],
      }),
    })
      .then((resp) => resp.json())
      .then((json) => {
        if (json.result === "error") {
          this.setState({
            resultado: json.message,
          });
          return;
        }
        this.setState({
          resultado: "La persona se ha creado correctamente",
        });
      });
  }

  componentDidMount() {
    fetch("http://localhost:1234/localidades")
      .then((resp) => resp.json())
      .then((json) => {
        this.setState({
          localidades: json.localidades,
        });
      });
    fetch("http://localhost:1234/materias")
      .then((resp) => resp.json())
      .then((json) => {
        this.setState({
          materias: json.materias,
        });
      });
  }

  render() {
    return (
      <div className="container">
        <form className="mb-3">
          <select className= ""name="localidad" onChange={this.handleChange} >
            {this.state.localidades.map((city) => (
              <option value={city.id}>{city.localidad}</option>
            ))}
          </select>
          <select name="materia" onChange={this.handleChange}>
            {this.state.materias.map((materia) => (
              <option value={materia.id}>{materia.materia}</option>
            ))}
          </select>
          <label>
            Nombre:
            <input
              type="text"
              name="nombre"
              onChange={this.handleChange}
              value={this.state.form.nombre}
            />
          </label>
          <label>
            Apellido
            <input
              type="text"
              name="apellido"
              onChange={this.handleChange}
              value={this.state.form.apellido}
            />
          </label>
          <label>
            Direccion
            <input
              type="text"
              name="direccion"
              onChange={this.handleChange}
              value={this.state.form.direccion}
            />
          </label>
          <label>
            Telefono
            <input
              type="text"
              name="telefono"
              onChange={this.handleChange}
              value={this.state.form.telefono}
            />
          </label>

          <button onClick={this.handleSubmit} type="submit" className="btn btn-primary">
            Crear Persona
          </button>
          <p>{this.state.resultado}</p>
        </form>
      </div>
    );
  }
}
