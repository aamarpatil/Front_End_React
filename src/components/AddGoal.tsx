//import { SellerModel } from "../models/SellerModel";
import { getAllGoalsAPI, postGoalAPI } from "../services/GoalsAPIService";
import React, { SyntheticEvent, useState } from "react";
//import { SellerList } from "./SellerList";

//import { postMessageAPI } from "../services/MessageAPIService";

interface GoalModel {
    goaltype:string,
    goalreview:string,
//    goaltargetdate:Date,
    goalweightage:number
}
export function AddGoal(){
    const [goaltype, setGoalType] = useState<string>("")
    const [goalreview, setGoalReview] = useState<string>("")
    const [goaltargetdate, setGoalTargetDate] = useState<string>("")
    const [goalweightage, setGoalWeightage] = useState<string>("")


    function GoalTypeHandler(event:SyntheticEvent){
        let textBox = event.target as HTMLTextAreaElement;
        setGoalType (textBox.value);
        console.log(textBox.value);
    }


    function GoalReviewHandler(event:SyntheticEvent){
        let textBox = event.target as HTMLTextAreaElement;
        setGoalReview(textBox.value);
        console.log(textBox.value);
    }

    // function GoalTargetDateHandler(event:SyntheticEvent){
    //     let textBox = event.target as HTMLTextAreaElement;
    //     setGoalTargetDate(textBox.value);
    //     console.log(textBox.value);
    // }

    function GoalWeightageHandler(event:SyntheticEvent){
        let textBox = event.target as HTMLTextAreaElement;
        setGoalWeightage(textBox.value);
        console.log(textBox.value);
    }


function buttonClickHandler(){
    const GoalData = {
        goaltype:goaltype,
        goalreview:goalreview,
 //       goaltargetdate:parseDate(goaltargetdate),
        goalweightage:parseInt(goalweightage)
}

       postGoalAPI(GoalData).then(response =>{
            if (response.ok){
                console.log("Goal created successfully!");
                setGoalType("");
                setGoalReview("");
 //               setGoalTargetDate("");
                setGoalWeightage("");
            }else {
                console.log ("Failed to create Goal!" + response.statusText);
            }
        }).catch(error => {
            console.error("Error is", error);
        });}

        return(<>
    
            <h1>Submit a New Goal</h1>
            <div className="input-container">
                <label>Goal Type:</label>
                <input type="text" onChange={GoalTypeHandler} value={goaltype}></input>
            </div>
            <div className="input-container">
                <label>Goal Review: </label>
                <input type="text" onChange={GoalReviewHandler} value={goalreview}></input>
            </div>
            {/* <div className="input-container">
                <label>Seller Name: </label>
                <input type="text" onChange={GoalTargetDateHandler} value={goaltargetdate}></input>
            </div> */}
            <div className="input-container">
                <label>Goal Weightage: </label>
                <input type="text" onChange={GoalWeightageHandler} value={goalweightage}></input>
            </div>
                <button onClick={buttonClickHandler}>Submit</button>
            </>
            );


    }

// function parseDate(goaltargetdate: string) {
//     throw new Error("Function not implemented.");


