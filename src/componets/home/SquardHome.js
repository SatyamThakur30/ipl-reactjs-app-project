import React, { Component } from 'react'
import squardData from '../squard/squarddata'

import './squardHome.css'
export default class Suard extends Component {
    state={
        data:squardData,
        dataClick:[],
        clickbtn:true,
        showsquard:true
    }
    async componentDidMount(){
      try {
        // eslint-disable-next-line no-undef
        const initialSquard=this.state.data.filter(item=>item.id<=1)
        const onclickSquard = this.state.data.filter(item=>item.id>1)
        this.setState({
          data:initialSquard,
          dataClick:onclickSquard,
          clickbtn:true,
          showsquard:true
        })
      } catch (error) {
        console.log(error);
    
      }}
      clickSquardBtn=()=>{
        this.setState({
          clickbtn:!this.state.clickbtn,
         showsquard:!this.state.showsquard
        })
      }
      showlessSquard=()=>{
          this.setState({
              showsquard:!this.state.showsquard
          })
      }
  render() {
      
    return (
    <React.Fragment>
     
        <div className="squardlist-container">
        <h2 style={{marginBottom:"-2rem",marginTop:"3rem"}}>Squads</h2>
        
         {
             this.state.data.map((item)=>{
               
                 return(
                   <div>
                  
                     <section className="squard-content" >
                     <div className="bg-img" >
                       <img src={item.banner} alt="banner"></img>
                     </div> 
                       <section className="squard" >
                      
                       <section className="squard-title"><h1>{item.team}</h1><img src={item.logo} alt="logo" width="50" height="50"></img></section>
                     <section className="captain"><p><strong>Captain:</strong> {item.captain}</p></section>
                     <section className="squard" ><p ><strong>Players:</strong></p>{item.squard}</section>
                     <section className="squard" ><p ><strong>Overseas:</strong></p>{item.overseas}</section>
                     
                       </section>
                      
                     </section>
                     {this.state.showsquard?<button className="squardbtn" style={{paddingTop:"0.3rem1",paddingBottom:".2rem"}} onClick={this.clickSquardBtn}>Expand All Squads<i style={{marginTop:"-1rem"}} className="fa fa-sort-down"></i></button>:""}

                     </div>
                 )
             })
         }
         {
             this.state.dataClick.map((item)=>{
               
                 return(
                   <div className={this.state.clickbtn?"notdisplaysquard":"displaysquard"}>
                  
                     <section className="squard-content" >
                     <div className="bg-img" >
                       <img src={item.banner} alt="banner"></img>
                     </div> 
                       <section className="squard" >
                      
                       <section className="squard-title"><h1>{item.team}</h1><img src={item.logo} alt="logo" width="50" height="50"></img></section>
                     <section className="captain"><p><strong>Captain:</strong> {item.captain}</p></section>
                     <section className="squard" ><p ><strong>Players:</strong></p>{item.squard}</section>
                    <section className="squard" ><p ><strong>Overseas:</strong></p>{item.overseas}</section>
                     
                       </section>
                      
                     </section>
                      </div>
                 )
             })
         }
         <section> {this.state.showsquard?"":<button className="squardbtn" style={{paddingTop:"0.3rem1",paddingBottom:".2rem"}} onClick={this.clickSquardBtn}><i style={{marginBottom:"-1rem"}}  className="fa fa-sort-up"></i>Show Less</button>}
 </section>
               </div>

        
        
    </React.Fragment>

    )
  }
}


  
                   
