import React, { Component } from 'react'
 import ScoreData from './Scoredata'
import './score.css'
export default class score extends Component {
  state={
  //  liveData:ScoreData.data
    liveData:[],
    url:"https://cricapi.com/api/cricket?apikey=C0Tghs88nXXhq2vowKCJr6QkeZV2"
   }

  async componentDidMount(){
  try {
    const data = await fetch(this.state.url);
    const jsonData = await data.json();
    const filterData = jsonData.data.filter((item)=>item.unique_id ==1181768);
    this.setState({
      liveData:filterData
    })
  } catch (error) {
    console.log(error);

  }}
  // componentDidMount(){
  //   const filterdata = this.state.liveData.filter((item)=>item.unique_id ==1175360);
  //   this.setState({
  //     liveData:filterdata
  //   })
  // }
  render() {
    console.log(this.state.liveData);
    
    return (
      <div className="main-container">
      <section className="title">
        <h2>Live score*</h2>
      </section>
     {
       this.state.liveData.map((item)=>{
         return(
           <div className="score">
             <p><strong>{item.title}</strong></p>
            
          </div>

         )
       })
     }
      </div>
    )
  }
}
