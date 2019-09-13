import React, { useState } from "react";
import  Dashboard  from "./Dashboard";

const Display = () => {

    const [ score, setScore ] = useState(0);
    const [ ball, setBall ] = useState(0);
    const [ strike, setStrike ] = useState(0);

    if( strike===4 || ball===5 ){
        setStrike(0)
        setBall(0)
    }

    const addOneBall =() =>{
        setBall(ball+1)
    };
    
    const addOneStrike =() =>{
        setStrike(strike+1)
    };

    const homeRun = () =>{
        setStrike(0)
        setBall(0)
        setScore(score+1)
    }

    // const foul =() => {
    //     set
    // }


    return(
        <div>
            <h1> Score: {score}</h1>
            <h1> Strike: {strike}</h1>
            <h1>Ball: {ball}</h1>
            <Dashboard strike={strike} addOneBall={addOneBall} addOneStrike={addOneStrike} homeRun={homeRun}/>
            <button onClick={()=>{
                setBall(0)
                setStrike(0)
                setScore(0)
            }}>Reset</button>
        </div>
    );
};

export default Display;