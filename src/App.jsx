
import React from "react"
import Navbar from "./components/navbar/navbar"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import LoginSignUp from "./Pages/LoginSignUp"
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Footer from "./components/footer/Footer";
import men_banner from "./assets/banner.jpg"
import women_banner from "./assets/women_banner.avif"
import kids_banner from "./assets/kids_banner.jpg"


function App() {

  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/men" element={<ShopCategory category="men" banner={men_banner}/>} />   {/*category is prop*/}
        <Route path="/women" element={<ShopCategory category="women"  banner={women_banner}/>} />
        <Route path="/kid" element={<ShopCategory category="kid" banner={kids_banner}/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/product/:productId" element={<Product/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/login" element={<LoginSignUp/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    
    </div>
  )
}

export default App

