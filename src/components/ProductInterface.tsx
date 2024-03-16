import React from "react";
import { ProductModel } from "../models/ProductModel";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

interface ProductProps{
    product:ProductModel;
    onDelete:()=>void;

}

const Seller: React.FC<ProductProps>=
({product ,onDelete})=>{

    const handleDelete=()=>
    {
        onDelete();
    };
  return(
    <div className='seller-info'> 
        { <p>Product ID:{product.loomId}</p> }
 
        <FontAwesomeIcon icon={faTrash}className="delete-icon" onClick={onDelete}/>
    </div>
);

}
      /* <p>Seller Name:{product.sellerName}</p>*/
export default Seller;