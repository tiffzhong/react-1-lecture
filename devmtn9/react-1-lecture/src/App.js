import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
     <div>
       <h1>Friend List</h1>
       <ul>
         <li>Friend 1</li>
         <li>Friend 2</li>
         <li>Friend 3</li>
         <li>Friend 4</li>
         <li>Friend 5</li>
         <button>Enter New Friend Name</button>
        </ul>
     </div>
    );
  }
}

export default App;
