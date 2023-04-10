import React from "react";

const signup=()=>{
    return(
       <div className="register">
        <input className="inputBox" type="text" placeholder="Enter Name" />
        <input className="inputBox"  type="text" placeholder="Enter Email" />
        <input className="inputBox" type="text" placeholder="Enter Password" />
        <button type="button">Sign-Up</button>
        </div>
      )
}

export default signup;