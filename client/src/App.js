import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    items: []
  }

  componentDidMount() {
    fetch('http://localhost:5000/api/items')
      .then(res => res.json())
      .then(data => {
        this.setState({
          items: data
        })
      })
  }

  render() {
    const { items } = this.state;

    return (
      <div className="App">
        <h1>Hello</h1>
        <ul>
          {items.map((item, i) => <li key={i}>{item.name}</li>)}
        </ul>
      </div>
    );
  }
}

export default App;
