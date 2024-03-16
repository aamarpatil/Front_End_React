import React, { useState, useContext, useEffect } from "react";
import { getAllSellerAPI } from "../services/SellerAPIService";
import { SellerModel } from "../models/SellerModel";
import DeleteSeller from "./DeleteSeller";

const apiBaseURL: string = "http://localhost:9003/"
export function SellerList() {
    const [sellers, setSellers] = useState<SellerModel[]>([]);

useEffect(() => {
    getAllSellerAPI()
    .then(response => response.json())
    .then(json => {
        setSellers(json);
    });
}, []);

/*const handleDeleteSeller = (id:number) => {
setSellers(prevSellers => prevSellers.filter(seller => seller.id !==id));
};
*/

const handleDeleteSeller = async (id: number| undefined) => {
    if(typeof id !== 'undefined'){
        try{
            console.log(id);
            await fetch(`${apiBaseURL}seller\\${id}`,{
                method:'DELETE',
                headers: {
                    'Content-Type':'application/json',},});
            
           setSellers(prevSeller => prevSeller.filter(sellers => sellers.id !== id));
            const deletedSellerIds = JSON.parse(localStorage.getItem('deletedSellerIds') || '[]');
            localStorage.setItem('deletedSellerIds', JSON.stringify([...deletedSellerIds,id]));
        } catch(error){
            console.log("Error deleteing seller:", error); 
        }
}else{
    console.log("Invalid SellerId: ", id);
}
}; 


return (
<>
<h1> Seller List: </h1>
{sellers.length > 0? (
    <ul className="no-bullets">
        {sellers.map((seller , index) => (
            <li key={index}>
                <div className="Seller-info">
                <span className="seller-property"> Seller ID is </span>
                <span className="seller-value"> {seller.id} </span> 
                <span className="seller-item"> </span>
                <span className="seller-property"> Seller Name is </span>
                <span className="seller-value"> {seller.name} </span>
                </div>
                <DeleteSeller onDelete = {() => handleDeleteSeller(seller.id)}/>
            </li>
        )  
        )}

    </ul>
) : (
    <span>Loading...</span>
)}
</>
) ; }
