import React, { Component } from "react";

import "./Signatures.css";
let signatures = [];

export default class CountClick extends Component {
  constructor(props) {
    super(props);
    //no entiendo porque lo del bind
    this.state = {
      signatures: [
        {
          title: "Signature 1",
          hours: 20,
        },
      ],
    };
  }
  handleClick = () => {
    this.setState({
      signatures: [
        ...this.state.signatures,
        {
          title: "Signature " + (this.state.signatures.length + 1),
          hours: Math.floor(Math.random() * (61 - 1) + 1),
        },
      ],
    });

    signatures = this.state.signatures.map((signature, index) => (
      <tr key={index}>
        <td>{signature.title}</td>
        <td>{signature.hours}</td>
      </tr>
    ));
  };

  render() {
    return (
      <div className="container div-container  text-align-center">
        <div className="card  text-align-center">
          <div class="card-body">
            <h2 class="card-title">Nombre : {this.props.name}</h2>
            <h4 class="card-title">Apellido : {this.props.lastName} </h4>
            <button className="btn bt-primary " onClick={this.handleClick}>
              Inscribirme
            </button>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Hours</th>
                </tr>
              </thead>
              <tbody>{signatures}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
