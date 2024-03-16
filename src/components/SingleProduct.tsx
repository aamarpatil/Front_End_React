import React, { useContext } from "react";
import { ProductModel } from "../models/ProductModel";
import { UserContext } from "../App";


interface propsInterface {
    data:ProductModel
}
export function SingleProduct(props:propsInterface){
    const valueFromContext = useContext(UserContext)
    return (<>
    <h2>{props.data.loomId}</h2>
    <p style={{fontStyle:"italic"}}>{props.data.loomName}</p>
    <p>{props.data.loomPrice}</p>
    <p style={{fontStyle:"italic"}}>{props.data.loomSellerName}</p>

   
    </>);
}


export default SingleProduct