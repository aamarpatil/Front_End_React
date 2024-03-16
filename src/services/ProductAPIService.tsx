import React from "react";
import { ProductModel } from "../models/ProductModel";



const apiBaseURL = "http://localhost:9003/"


export function getAllProductsAPI (){
 
    return fetch(apiBaseURL+"loomband",
      
        {
              method:"GET",
              mode:"cors"
          }
            );
    }
    //export function postSomeproducts(){
    export function postProductAPI(data:ProductModel){
        return fetch(apiBaseURL+"loomband", {
            method:"POST",
            mode:"cors",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(data)
        })
    }



    export function deleteProductAPI(data:ProductModel){
        return fetch(apiBaseURL + 'loomband/${loomId}', {
            method:"DELETE",
            mode:"cors",
            headers:{"Content-Type":"application/json"},
          
        })
    }


export default getAllProductsAPI;