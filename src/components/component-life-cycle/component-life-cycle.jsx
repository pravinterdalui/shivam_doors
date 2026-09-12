import { useEffect, useState } from "react"


export function Login(){

    useEffect(()=>{
        console.log('Login component Mounted');

        return()=>{
            console.log('Login Component Will unmount')
        }
    })

    return(
        <div>
            <h3>Login</h3>
        </div>
    )
}


export function Register(){

    useEffect(()=>{
        console.log('Register Component Mounted');

        return()=>{
            console.log('Register Component Will Unmounted');
        }
    },[])

    return(
        <div>
            <h3>Register</h3>
        </div>
    )
}


export function LifeCycleDemo(){

    const[component,setComponent]=useState();

    function handleLoginClick(){
        setComponent(<Login/>)
    }

    function handleRegisterClick(){
        setComponent(<Register/>)
    }

    return(
        <div className="container-fluid">
            <h2>Life Cycle</h2>
            <button className="btn btn-warning btn-sm" onClick={handleLoginClick}>Login</button>
            <button className="btn btn-info btn-sm mx-2" onClick={handleRegisterClick}>Register</button>
            <hr/>
            {component}
        </div>
    )
}