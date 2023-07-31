import "./product.css";

import React from 'react'

const Product = ({img,link,desc}) => {
  return (
    <div className="p">
    <div className="p-browser">
      <div className="p-circle" style={{backgroundColor:"yellow"}}></div>
      <div className="p-circle" style={{backgroundColor:"lightgreen"}}></div>
      <div className="p-circle" style={{backgroundColor:"tomato"}}></div>
    </div>

    <div className="p-a-wrapper">

    <a href={link} target="_blank" rel="noreferrer">
    <div className="p-text">{desc}</div>

      <img src={img} alt="" className="p-img" />



    </a>

    </div>
    <div className="github">
    <p>Click to see the github repo</p>

    </div>

  </div>
  )
}

export default Product
