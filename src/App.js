import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.countLetters = this.countLetters.bind(this)
    this.state = {
      text: '',
      count: 0
    };
  };
  render() {
    return (
      <div className="container">
        <textarea rows="3" onChange={this.countLetters.bind(this)}>{this.state.text}</textarea>
        <div className="counter">{this.state.count}</div>
      </div>
    );
  };

  countLetters(event) {
    this.setState({
      text: event.target.value,
      count: event.target.value.length
    });
  }
}

export default App;
