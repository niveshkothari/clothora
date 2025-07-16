import React from 'react'
import "./BedCrums.css"
import arrow_icon from "../../assets/arrow_icon.png"

const BedCrums = (props) => {
const {product} = props ;

  return (
    <div className='bedcrums'>
        Home <img src={arrow_icon} alt="" height="10px"/> SHOP <img src={arrow_icon} alt="" height="10px" />{product.category} <img src={arrow_icon} alt="" height="10px" /> {product.name} 
    </div>
  )
}

export default BedCrums
