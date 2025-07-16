import React, {useContext} from 'react'
import { ShopContext } from '../context/Shopcontext'
import { useParams } from 'react-router-dom'
import BedCrums from '../components/bedcrums/BedCrums'
import ProductDisplay from '../components/productdisplay/ProductDisplay'
import Description from "../components/description/Description"
import RelatedProducts from "../components/relatedproducts/RelatedProducts"

const Product = () => {
  const {all_product} = useContext(ShopContext) ;
  const {productId} = useParams() ;
  const product = all_product.find((e) => e.id === parseInt(productId)) ;

  if (!product) return <p style={{margin: '20px'}}>Loading product...</p>;
  return (
    <div>
      <BedCrums product={product}/>
      <ProductDisplay product={product}/>
      <Description/>
      <RelatedProducts/>
    </div>
  )
}

export default Product
