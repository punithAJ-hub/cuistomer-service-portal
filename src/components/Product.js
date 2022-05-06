/* eslint-disable no-lone-blocks */
import React from "react";
import Rater from "./Rater";

import { useState } from "react";

function Product(props){
    // return(
    // <div>
    //   <div className="card" >
    //       <img src={lapimg} alt="Gamia laptop" className="card-img-top" />
    //     <div className="card-body">
    //         <h5 className="card-title">Gamia Laptop</h5>
    //         <span className="text-danger price">Rs.35000</span>
    //         <p className="card-text">An Excellent choice for awesome gaming experience</p>
    //         <Rater/>
    //     </div>
    //     </div>
    // </div>
    // );

    return(
            <div key={props.prodDetails.id}  >
                     {props.prodDetails.map(detail =>{
             return(
                <div className="card" key={detail.prodName} style={{display:'inline-block'}} >
                <img src={detail.img} alt={detail.altText} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{detail.prodName}</h5>
                  <span className="text-danger price">{detail.prodPrice}</span>
                  <p className="card-text">{detail.prodDesc}</p>
                  <Rater rating={detail.rating} maxlength='6'/>
                 </div>           
              </div>
             );
         })}
            </div>

    );
 
}

export default Product;