import React from "react";
//import { SellerList } from "../components/SellerList";
import { getAllGoalsAPI, postGoalAPI } from "../services/GoalsAPIService";
import { useEffect, useState } from "react";
import { GoalModel } from "../models/GoalModel";
import { AddGoal } from "../components/AddGoal";

export function GoalsPage(){

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
    {/* <GoalList></GoalList> */}
    <AddGoal></AddGoal>

    </>
        )
};