import React, { Component } from 'react'
import {Slide} from 'react-slideshow-image'
import './recordslideshow.css'
export default class Logoslideshow extends Component {
  render() {
    return (
      <div>
        <Slide {...properties} className="slide-container" id="recordslide-container" >
            <div className="each-slide" id="recordeach-slide">
          <section className="slide-img" id="recordslide-img">
           <img src={slidesimages[1]}  alt="logo"  ></img>
           <img src={slidesimages[0]}  alt="logo" ></img>
            <img src={slidesimages[2]}  alt="logo"></img>
            <img src={slidesimages[3]}  alt="logo"></img>
            <img src={slidesimages[12]}  alt="logo"></img>
          </section>
            </div>
            <div className="each-slide" id="recordeach-slide">
          <section className="slide-img" id="recordslide-img">
           <img src={slidesimages[4]}  alt="logo" ></img>
            <img src={slidesimages[5]}  alt="logo"  ></img>
            <img src={slidesimages[6]}  alt="logo"></img>
            <img src={slidesimages[7]}  alt="logo"></img>
          </section>
            </div> 
            <div className="each-slide" id="recordeach-slide">
          <section className="slide-img" id="recordslide-img">
           <img src={slidesimages[8]}  alt="logo" ></img>
            <img src={slidesimages[9]}  alt="logo"  ></img>
            <img src={slidesimages[10]}  alt="logo"></img>
            <img src={slidesimages[11]}  alt="logo"></img>
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
    "./teamslogo/decc.png",
    "./teamslogo/gl.png",
    "./teamslogo/kt.png",
    "./teamslogo/pwi.png",
    "./teamslogo/rps.png",
   

]
const properties = {
    duration:4000,
    transitionDuration:500,
    infinite:true,
    indicators:false,
    arrows:true
}