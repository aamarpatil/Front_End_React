import React from "react";
import {ProductList} from "../components/ProductList";
import { ProductSubmit } from "../components/ProductSubmit";
import getAllProductsAPI from "../services/ProductAPIService";


export function ProductPage(){
    function logAllProducts(){
        getAllProductsAPI()
        .then(response => {return response.json()})
        .then(json => {console.log(json)});
    }
    /*
    function postSeller(){
        postSomeSeller()
        .then(response => {return response.json()})
        .then(json => {console.log(json)})
        .catch(error => {console.log(error)})
    }*/
    return (
    <>
    <ProductList></ProductList>
    <ProductSubmit></ProductSubmit>
    
    </>
        )
}



