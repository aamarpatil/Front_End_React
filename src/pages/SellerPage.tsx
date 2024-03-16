import React from "react";
import { SellerList } from "../components/SellerList";
import { getAllSellerAPI, postSellerAPI } from "../services/SellerAPIService";
import { useEffect, useState } from "react";
import { SellerModel } from "../models/SellerModel";
import { AddSeller } from "../components/AddSeller";

export function SellerPage(){

/*    function logAllSeller(){
        getAllSellerAPI()
        .then(response => {return response.json()})
        .then(json => {console.log(json)});
    }
    function postSeller(){
        postSomeSeller()
        .then(response => {return response.json()})
        .then(json => {console.log(json)})
        .catch(error => {console.log(error)})
    }
    */
    return (
    <>
    <SellerList></SellerList>
    <AddSeller></AddSeller>

    </>
        )
};