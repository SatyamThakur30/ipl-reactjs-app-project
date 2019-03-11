import React, { Component } from 'react'
import {Slide} from 'react-slideshow-image'
import './logoslideshow.css'
export default class Logoslideshow extends Component {
  render() {
    return (
      <div id="logoslideshowid">
        <Slide {...properties} className="slide-container" id="logoslide-container" >
            <div className="each-slide" id="each-slide">
          <section className="slide-img" id="slide-img">
           <img src={slidesimages[1]}  alt="logo"  ></img>
           <img src={slidesimages[0]}  alt="logo" ></img>
            <img src={slidesimages[2]}  alt="logo"></img>
            <img src={slidesimages[3]}  alt="logo"></img>
          </section>
            </div>
            <div className="each-slide" id="each-slide">
          <section className="slide-img" id="slide-img">
           <img src={slidesimages[4]}  alt="logo" ></img>
            <img src={slidesimages[5]}  alt="logo"  ></img>
            <img src={slidesimages[6]}  alt="logo"></img>
            <img src={slidesimages[7]}  alt="logo"></img>
          </section>
            </div>       
             </Slide>
      </div>
    )
  }
}
const slidesimages =[
    "./teamslogo/csk.png",
    "./teamslogo/mi.png",
    "./teamslogo/rcb.png",
    "./teamslogo/dc.png",
    "./teamslogo/pj.png",
    "./teamslogo/kkr.png",
    "./teamslogo/rrr.png",
    "./teamslogo/srh.png",
]
const properties = {
    duration:5000,
    transitionDuration:500,
    infinite:true,
    indicators:false,
    arrows:true
}