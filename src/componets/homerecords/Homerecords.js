import React, { Component } from 'react'
import Teams from './Teams'
import Mostrun from './Mostrun'

import Mostwickets from './Mostwickets'



export default class Records extends Component {
 
  render() {
    return (
      <div>
     
     
     <Mostrun></Mostrun>
     <Mostwickets></Mostwickets>
     
     <Teams></Teams>
      
        {/* <Highesttotal></Highesttotal>
        <Lowesttotal></Lowesttotal>
        
        <Mixrecord></Mixrecord> */}
        
        {/* <Hatrikjs></Hatrikjs> */}
        
     </div>
     
    )
  }
}
