import { SellerModel } from "../models/SellerModel";
import { getAllSellerAPI, postSellerAPI } from "../services/SellerAPIService";
import React, { SyntheticEvent, useState } from "react";
import { SellerList } from "./SellerList";
import { postProductAPI } from "../services/ProductAPIService";


//import { postMessageAPI } from "../services/MessageAPIService";



export function ProductSubmit(){
  //  const [loomId, setLoomId] = useState<string>("")
    const [loomName, setLoomName] = useState<string>("")
    const [loomPrice, setLoomPrice] = useState<string>("")
    const [loomSellerName, setLoomSellerName] = useState<string>("")

/*

    function productIdHandler(event:SyntheticEvent){
        let textBox = event.target as HTMLTextAreaElement;
        setLoomId (textBox.value);
        console.log(textBox.value);
    }

*/

    function productNameHandler(event:SyntheticEvent){
        let textBox = event.target as HTMLTextAreaElement;
        setLoomName(textBox.value);
        console.log(textBox.value);
    }


    function productPriceHandler(event:SyntheticEvent){
        let textBox = event.target as HTMLTextAreaElement;
        setLoomPrice(textBox.value);
        console.log(textBox.value);
    }
    function productSellerHandler(event:SyntheticEvent){
        let textBox = event.target as HTMLTextAreaElement;
        setLoomSellerName(textBox.value);
        console.log(textBox.value);
    }



/*
    function buttonClickHandler(){
        const sellerData = {
            id:parseInt(id,3),
            name:name
    }
*/
function buttonClickHandler(){
    const productData = {
      //  loomId:parseInt(loomId),
        loomName:loomName,
        loomPrice:parseInt(loomPrice),
        loomSellerName:loomSellerName
}


       postProductAPI(productData).then(response =>{
            if (response.ok){
                console.log("Product created successfully!");
               // setLoomId("");
                setLoomName("");
                setLoomPrice("");
                setLoomSellerName("");


            }else {
                console.log ("Failed to create Product!" + response.statusText);
            }
        }).catch(error => {
            console.error("Error is", error);
        });}


        return(<>
    
            <h1>Submit a New Product</h1>

            <div className="input-container">
                <label>Looom Name: </label>
                <input type="text" onChange={productNameHandler} value={loomName}></input>
            </div>
            <div className="input-container">
                <label>Loom Price: </label>
                <input type="text" onChange={productPriceHandler} value={loomPrice}></input>
            </div>
            <div className="input-container">
                <label>Loom Seller Name: </label>
                <input type="text" onChange={productSellerHandler} value={loomSellerName}></input>
            </div>
                <button onClick={buttonClickHandler}>Submit</button>
            </>
            );



    }
