import React, { Component } from 'react';
import './App.css';
import {Switch , Route } from 'react-router-dom'
import Navbar from './componets/Navbar';
import Home from './componets/Home';
import Squard from './componets/Squard'
import Records from './componets/Records'
import Header from './componets/Header'
class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar></Navbar>
      <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route path="/squard" component={Squard}></Route>
      <Route path="/records" component={Records}></Route>
      </Switch>
     
     <Header></Header>
      </div>
    );
  }
}

export default App;
