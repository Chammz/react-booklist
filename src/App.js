import React, { Component } from 'react';
import Books from './components/Books.js';
import './css/App.css'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div
          className="app-bar"
        >
          <div> Story Time </div>
        </div>
          <h2>My Books</h2>
          <ul>
            <Books />
          </ul>
      </div>
    );
  }
}

export default App;
