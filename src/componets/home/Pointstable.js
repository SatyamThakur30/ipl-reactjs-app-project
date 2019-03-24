import React, { Component } from 'react'
import pointstable from './Pointsdata'
import './poinstable.css'
export default class Pointstable extends Component {
   
    state={
        points : pointstable
    }
    async componentDidMount(){
        this.setState({
            points:this.state.points.sort((a,b) =>{
            if(b.points>a.points){
                return (b.points-a.points)
            }
            else if(b.points==a.points){
                return(b.rr-a.rr)
            }
            })
        })
    }
   
    
  render() {
    
    return (
        <React.Fragment>
    
      <div className="pt-container">
      <section>
       <h2><strong>Points Chart</strong></h2>
       </section>  
        <table>
         
            <tbody>
                <tr className="main-pt-row">
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
                           <td className="batsmenname"><img src ={info.logo} alt="logo" width="40" height="40"></img><p style={{alignSelf:"center",color:"blue"}}><strong>{info.team}</strong></p></td>
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

        </React.Fragment>
          )
  }
}
