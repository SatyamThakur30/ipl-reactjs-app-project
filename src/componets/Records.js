import React, { Component } from 'react'
import Teams from './records/Teams'
import Mostrun from './records/Mostrun'
import Fastest100 from './records/Fastest100'
import Fast50 from './records/Fast50'
import Mostwickets from './records/Mostwickets'
import Hatrikjs from './records/Hatrikjs'
import Highesttotal from './records/Highesttotal'
import Lowesttotal from './records/Lowesttotal'
import Mostsix from './records/Mostsix'
import Mixrecord from './records/Mixrecord'
import Recordslideshow from './records/Recordslideshow'
export default class Records extends Component {
  render() {
    return (
      <div>
      <Recordslideshow></Recordslideshow>
      <Teams></Teams>
        <Mostrun></Mostrun>
        <Fastest100></Fastest100>
        <Fast50></Fast50>
        <Highesttotal></Highesttotal>
        <Lowesttotal></Lowesttotal>
        <Mostsix></Mostsix>
        <Mixrecord></Mixrecord>
        <Mostwickets></Mostwickets>
        <Hatrikjs></Hatrikjs>
      </div>
    )
  }
}
