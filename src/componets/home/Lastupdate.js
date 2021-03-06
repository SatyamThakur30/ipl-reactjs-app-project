import React, { Component } from 'react'
import playoffs from './playoffsdata'
import './lastupdate.css'
export default class Lastupdate extends Component {
    state={
        data: playoffs
    }
    async componentDidMount(){
        try {
            const winner = await this.state.data.filter((item)=>item.id ==4);
           
            this.setState({
                data:winner
          
            })  
        } catch (error) {
          console.log(error);
            
        }
       }
  render() {
    return (
      <div className="lastupdate-container">
        <div className="lastupdate-title">
        <h2>Previous Match</h2>
        </div>
        {
            this.state.data.map((item)=>{
                return(
                    <div className="lastupdate-content">
                        <p>Match: <strong>{item.teams} </strong> ({item.venue})</p>
                        <p><strong>{item.winner} </strong>&nbsp;won by <strong>&nbsp;{item.by}</strong></p>
                        
                    </div>
                )
            })
        }
      </div>
    )
  }
}
