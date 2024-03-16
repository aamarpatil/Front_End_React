import { SellerModel } from "../models/SellerModel";

const apiBaseURL = "http://localhost:9003/"
export function getAllSellerAPI(){
    return fetch(apiBaseURL+"seller"
    ,{
          method:"GET",
          mode:"cors"
      }
        );
}
//export function postSomeSeller(){
export function postSellerAPI(data:SellerModel){
    return fetch(apiBaseURL+"seller", {
        method:"POST",
        mode:"cors",
        headers:{"Content-Type":"application/json"},
        //body:JSON.stringify({name:name, id:10})
        body:JSON.stringify(data)
    })
}