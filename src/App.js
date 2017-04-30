import React, { Component } from 'react';
import Book from './components/Book.js';
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
            <Book
              title="Treasure Island"
              author="Robert Louis Stevenson"
            />
            <Book
              title="The Sun Also Rises"
              author="Ernest Hemingway"
            />
          </ul>
      </div>
    );
  }
}

export default App;
