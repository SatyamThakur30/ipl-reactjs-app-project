import React, { Component } from 'react'
import pointstable from './Pointsdata'
export default class Pointstable extends Component {
   
    state={
        points : pointstable
    }
    async componentDidMount(){
        this.setState({
            points:this.state.points.sort((a,b)=>{
                return ((b.rr-a.rr)||(b.points-a.points))
            })
        })
    }
   
    
  render() {
    
    return (
        
      <div>
       <section>
       <h2><strong>Points Table</strong></h2>
       </section>
        <table>
            <tbody>
                <tr className="main-row">
                    <td>Rank</td>
                    <td>Team</td>
                    <td>Played</td>
                    <td>Won</td>
                    <td>Loss</td>
                    <td>Points</td>
                    <td>R.Rate</td>
                </tr>
                { 
                    
                    this.state.points.map((info,index)=>{
                    return(
                        <tr>
                           <td>{index+1}</td>
                            <td>{info.team}</td>
                            <td>{info.played}</td>
                            <td>{info.won}</td>
                            <td>{info.loss}</td>
                            <td>{info.points}</td>
                            <td>{info.rr}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
      </div>
    )
  }
}
