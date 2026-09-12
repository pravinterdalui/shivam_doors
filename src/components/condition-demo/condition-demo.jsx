import { useState } from "react";
import { Flipkart } from "../flipkart/flipkart";
import { Databinding } from "../databinding/databinding";

export function ConditionDemo(){
    const[component,setComponent]=useState();
    const[user,setUser]=useState();

    function handleNameChange(e){
        setUser(e.target.value);
    }

    function handleSignInClick(){
        if(user==="john"){
            setComponent(<Flipkart/>);
        }else{
            setComponent(<Databinding/>)
        }
    }


    return(
        <div className="container-fluid p-2">
            <h2>Conditional Render</h2>
            <input type="text" onChange={handleNameChange}/>
            <button onClick={handleSignInClick}>Sign In</button>
            <hr/>
            <div>
                {
                    component
                }
            </div>
        </div>
    )
}