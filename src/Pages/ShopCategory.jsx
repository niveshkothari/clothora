import React, {useContext, useState} from 'react'
import { ShopContext } from '../context/Shopcontext'
import "../css/ShopCategory.css"
import dropdown_icon from "../assets/dropdown_icon.png"
import Item from '../components/item/Item'

const ShopCategory = (props) => {

  const {all_product}=useContext(ShopContext);
  console.log("Products from context:", all_product);

  return (
    <div className='shop-category'>
      <img className="shopcategory-banner" src={props.banner} alt=""/>
      <div className="shopcategory-indexsort">
        <p>
          <span>Showing 1-8</span> out of 36 Products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt='' height="20px"/>
        </div>
      </div>
      <div className="shopcategory-allproducts">
        {all_product?.map((item, i) => (
            props.category === item.category ? (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                old_price={item.old_price}
                new_price={item.new_price}
              />
            ) : null
          ))}
      </div>

      <div className="shopcategory-loadmore">
        Explore more
      </div>
    </div>
  )
}

export default ShopCategory
