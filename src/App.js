import React, { Component } from 'react';
import './App.css';
import Navbar from './componets/Navbar';
import Home from './componets/Home';
class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar></Navbar>
     <Home></Home>
    
      </div>
    );
  }
}

export default App;
