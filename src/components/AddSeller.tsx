import { SellerModel } from "../models/SellerModel";
import { getAllSellerAPI, postSellerAPI } from "../services/SellerAPIService";
import React, { SyntheticEvent, useState } from "react";
import { SellerList } from "./SellerList";

//import { postMessageAPI } from "../services/MessageAPIService";


export function AddSeller(){
    const [id, setId] = useState<string>("")
    const [name, setName] = useState<string>("")


    function sellerIdHandler(event:SyntheticEvent){
        let textBox = event.target as HTMLTextAreaElement;
        setId (textBox.value);
        console.log(textBox.value);
    }


    function sellerNameHandler(event:SyntheticEvent){
        let textBox = event.target as HTMLTextAreaElement;
        setName(textBox.value);
        console.log(textBox.value);
    }


function buttonClickHandler(){
    const sellerData = {
        id:parseInt(id),
        name:name
}

       postSellerAPI(sellerData).then(response =>{
            if (response.ok){
                console.log("seller created successfully!");
                setId("");
                setName("");
            }else {
                console.log ("Failed to create Seller!" + response.statusText);
            }
        }).catch(error => {
            console.error("Error is", error);
        });}

        return(<>
    
            <h1>Submit a New Seller</h1>
            <div className="input-container">
                <label>Seller ID:</label>
                <input type="text" onChange={sellerIdHandler} value={id}></input>
            </div>
            <div className="input-container">
                <label>Seller Name: </label>
                <input type="text" onChange={sellerNameHandler} value={name}></input>
            </div>
                <button onClick={buttonClickHandler}>Submit</button>
            </>
            );


    }

