import React, { Component } from 'react'
import './fixtures.css'
import Fixturedata from './Fixturesdata'
export default class Fixtures extends Component {
    state ={
        fixtures:Fixturedata
    };
    
    
  render() {
      console.log(this.state.fixtures);
      
    return (
      <React.Fragment>
          <section className="table-container">
          <table >
            <tbody>
            <tr className="main-row">
                  <td><strong>Match</strong></td>
                  <td><strong>Teams</strong></td>
                  <td><strong>Date</strong></td>
                  <td><strong>Timing</strong></td>
                  <td><strong>Venue</strong></td>
                  <td><strong>Winner</strong></td>
              </tr>
             {this.state.fixtures.map((info)=>{
                 return(
                     <tr>
                         <td>{info.id}</td>
                         <td>{info.teams}</td>
                         <td>{info.date}</td>
                         <td>{info.timing}</td>
                         <td>{info.venue}</td>
                         <td>{info.winner}</td>
                     </tr>
                 )
             })}
            
           </tbody> 
          </table>
          </section>
      </React.Fragment>
    )
  }
}
