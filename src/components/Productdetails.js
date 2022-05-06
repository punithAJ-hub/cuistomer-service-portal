
import { useState } from "react";
import Product from "./Product";
import GamiaLaptop from "../images/GamiaLaptop.jpg";
import Officelaptop from "../images/OfficeLaptop.jpg";

const data=(
    [
        {
            prodName:"Gamia Laptop",
            prodPrice:"Rs.35000",
            img:GamiaLaptop,
            prodDesc:'An Excellent choice for awesome gaming experience',
            rating:3,
            altText:'Gamia Laptop'
        },
        {
            prodName:"Office Laptop",
            prodPrice:"Rs.55000",
            img:Officelaptop,
            prodDesc:'An Excellent choice for Office Works',
            rating:4,
            altText:'Office Laptop'
        }

    ]
)
function ProductDetails()
{
    return(
        <>
        <Product prodDetails={data} />
        </>
    )
}

export default ProductDetails;