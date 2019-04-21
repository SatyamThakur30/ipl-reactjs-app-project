import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import logo from './ipllogo.png'
export default class Navbar extends Component {
  render() {
    return (
    <nav className="navbar-container">
        <Link to="/"><img src={logo} alt="logo" width="50" style={{}}></img></Link>
        <ul className="linklist">
            <Link to="/"><li className="link"><strong>Home</strong></li></Link>
           <Link to ="/squads"> <li className="link"><strong>Squards</strong></li></Link>
            <Link to ="/records"><li className="link"><strong>Records</strong></li></Link>
        </ul>
    </nav>
        )
  }
}
