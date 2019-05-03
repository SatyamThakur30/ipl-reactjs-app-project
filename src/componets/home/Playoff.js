import React, { Component } from 'react'
import './fixtures.css'
import playoffs from './playoffsdata'
export default class Fixtures extends Component {
    state ={
        fixtures:playoffs
    };


  render() {
   
    return (
      <React.Fragment>
          <section className="table-container">
          <h2>PlayOffs</h2>
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
                         <td><strong>{info.match}</strong></td>
                         <td><strong>{info.teams}</strong></td>
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
