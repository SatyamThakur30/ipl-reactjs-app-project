import React, { Component } from 'react'
import './fixtures.css'
import Fixturedata from './Fixturesdata'
export default class Fixtures extends Component {
    state ={
        fixtures:Fixturedata
    };
  componentDidMount(){
    try {
      const initialFixtures=this.state.fixtures.filter((item)=>item.id<=25)
     
   
      this.setState({
        fixtures:initialFixtures,
        showfix:true
      })
    } catch (error) {
      console.log(error)
    }
  }
onviewallFixture=()=>{
  this.setState({
    fixtures:Fixturedata,
    showfix:!this.state.showfix
  })
}
onviewlessFixture=()=>{
  const initialFixtures=this.state.fixtures.filter((item)=>item.id<=25)
     
  this.setState({
    fixtures:initialFixtures,
    showfix:!this.state.showfix
  })
}
  render() {
   
    return (
      <React.Fragment>
          <section className="table-container">
          <h2>Fixtures</h2>
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
          {this.state.showfix?<button className="fixturesbtn" style={{paddingTop:"0.3rem",paddingBottom:".2rem"}} onClick={this.onviewallFixture}>Expand All Fixtures<i style={{marginTop:"-1rem"}} className="fa fa-sort-down"></i></button>:<button className="fixturesbtn" style={{padding:".1rem 0 .2rem 0"}} onClick={this.onviewlessFixture}><i style={{marginBottom:"-1rem"}}  className="fa fa-sort-up"></i>Show Less </button>}
          <p>*Schedule is subject to change</p>
          </section>
          
      </React.Fragment>
    )
  }
}
