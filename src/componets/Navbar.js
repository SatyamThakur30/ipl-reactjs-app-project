import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import logo from './ipllogo.png'
export default class Navbar extends Component {
  render() {
    return (
    <nav className="navbar-container">
        <img src={logo} alt="logo" width="50" style={{}}></img>
        <ul className="linklist">
            <li className="link"><strong>Home</strong></li>
            <li className="link"><strong>Squards</strong></li>
            <li className="link"><strong>Records</strong></li>
        </ul>
    </nav>
        )
  }
}
