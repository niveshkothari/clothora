import React from 'react'
import Hero from "../components/hero/Hero"
import Item from '../components/item/Item'
import Popular from '../components/popular/Popular'
import Offers from '../components/offers/Offers'
import Newcollection from '../components/newCollection/Newcollection'
import Newsletter from '../components/newsletter/Newsletter'



const Shop = () => {
  return (
    <div>
        <Hero/>
        <Popular/>
        <Offers/>
        <Newcollection/>
        <Newsletter/>
    </div>
  )
}

export default Shop