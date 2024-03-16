import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SellerModel } from "../models/SellerModel";
import {faTrash} from "@fortawesome/free-solid-svg-icons";

interface SellerProps{
    seller:SellerModel;
    onDelete: () => void;
}

const Seller: React.FC<SellerProps>=
({seller, onDelete}) => {
    const handleDelete =()=>
    {
        onDelete();
    };
    return (
        <div>
            <p> Seller ID is:{seller.id}</p>
            <p> Seller Name is:{seller.name}</p>
            <FontAwesomeIcon icon= {faTrash}className ="delete-icon" onClick={onDelete}/>
        </div>
    );
}

export default Seller;

