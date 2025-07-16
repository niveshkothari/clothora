import React from 'react'
import exclusive from "../../assets/exclu.webp"
import "./Offers.css"

const Offers = () => {
  return (
    <div className='offers'>
        <div className='offers-left'>
            <h1>Exclusive</h1>
            <h1>Offers for You</h1>
            <p>ONLY ON BEST SELLERS PRODUCT</p>
            <button>Check Now</button>
        </div>
        <div className='offers-right'>
            <img src={exclusive} alt=''></img>
        </div>
    
    </div>
  )
}

export default Offers
