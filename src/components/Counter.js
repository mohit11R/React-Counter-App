import React, { Component } from "react";

export class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  Increment() {
    this.setState({ count: this.state.count + 1 });
  }
  reset() {
    this.setState({ count: 0 });
  }
  Decrement() {
    this.setState({ count: this.state.count - 1 });
  }
  render() {
    return (
      <div class=" container bg-dark text-center mt-4" id='main-box'>
        <div>
          <h4  class="mt-3 text-white ">Count - {this.state.count}</h4>
        </div>

        <br />
        <div class=" container mb-4">
        <button class="btn btn-success" onClick={() => this.Increment()}>Increment</button>
        <button class="btn btn-danger" onClick={() => this.reset()}>Reset</button>
        <button class="btn btn-warning" onClick={() => this.Decrement()}>Decrement</button>
      </div>
      </div>
    );
  }
}
