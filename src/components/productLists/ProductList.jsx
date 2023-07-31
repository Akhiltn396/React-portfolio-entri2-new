import "./ProductList.css";
import Product from "../product/Product";
import { products } from "../../data";


import React from 'react'

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create & inspire. </h1>
        <p className="pl-desc">
         The following are some of my projects built with MERN stack.
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} desc={item.desc} />

       ))}

      </div>
    </div>
  )
}

export default ProductList

