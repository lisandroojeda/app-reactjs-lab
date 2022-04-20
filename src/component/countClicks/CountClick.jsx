import React, { Component, setState } from "react";

export default class CountClick extends Component {
  constructor(props) {
    super(props);
    //no entiendo porque lo del bind 
    this.state = {
      count: 0,
    };
  }
  handleClick = () => {
    this.setState((state) => ({ count: state.count + 1 }));
  };
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}
