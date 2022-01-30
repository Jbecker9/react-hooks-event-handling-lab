// Code Keypad Component Here
import React from "react";

function Keypad(){
    function keyPadChange(){
        console.log("Entering password...")
    }

    return(
        <input type="password" onChange={keyPadChange}></input>
    )
}

export default Keypad