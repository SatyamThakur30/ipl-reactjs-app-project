import React, { Component } from 'react';
import './App.css';
import Navbar from './componets/Navbar';
import Home from './componets/Home';
import Header from './componets/Header'
class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar></Navbar>
     <Home></Home>
     <Header></Header>
      </div>
    );
  }
}

export default App;
