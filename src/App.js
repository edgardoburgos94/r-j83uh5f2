import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  };
  render() {
    return (
      <div className="container">
        <textarea rows="3" onChange={this.countLetters.bind(this)}></textarea>
        <div className="counter">{this.state.count}</div>
      </div>
    );
  };

  countLetters() {
    this.setState({
      count: this.state.count + 1
    });
  }
}

export default App;
