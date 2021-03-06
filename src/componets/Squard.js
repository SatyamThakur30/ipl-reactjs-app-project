import React, { Component } from 'react'
import squardData from './squard/squarddata'

import './squard.css'
export default class Suard extends Component {
    state={
        data:squardData
    }
    async componentDidMount(){
      try {
        // eslint-disable-next-line no-undef
        <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        
          // eslint-disable-next-line no-undef
          (adsbygoogle = window.adsbygoogle || []).push({
            google_ad_client: "ca-pub-5006111070699507",
            enable_page_level_ads: true
          });
        
      } catch (error) {
        console.log(error);
    
      }}
  render() {
      
    return (
    <React.Fragment>
     
        <div className="squardlist-container">
        
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
                     </div>
                 )
             })
         }
        
        </div>
      
    </React.Fragment>

    )
  }
}
