import React from 'react'
import "./Hero.css"
import hand_icon from "../../assets/hand_icon.png"
import arrow_icon from "../../assets/arrow_icon.png"
import men from "../../assets/p8.webp"

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>Best Deals!   &   Best Prices!</h2>
            
            <div className="hand-hand-icon">
                <p>new</p>
                <img src={hand_icon} alt="" height="50px"></img>
            </div>
            <p>Collections</p>
            <p>for EveryOne</p>
            <div className="hero-latest-button">
                <div>Latest Collections</div>
                <img src={arrow_icon} alt="" height="30px"></img>
            </div>
        </div>
        
        <div className="hero-right">
            <img src={men} alt="" height="500px"></img>

        </div>
    </div>
  )
}

export default Hero
