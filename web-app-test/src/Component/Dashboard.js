import React from "react";

const Dashboard = props => {
    
    return(
        <div>
            <button className="button strike" onClick={()=>props.addOneStrike()}>Strike</button>
            <button className="button ball" onClick={()=>props.addOneBall()}>Ball</button>
            <button className="button foul" onClick={()=>{
                if(props.strike !== 2){
                props.addOneStrike()}}}>Foul</button>
            <button className="button hit" onClick={()=>props.homeRun()}>Hit</button>
        </div>
    );
};

export default Dashboard;