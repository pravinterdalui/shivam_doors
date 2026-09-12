import { useEffect, useState } from "react"


export function Databinding(){

    const[uname,setUname]=useState('Pravin');
    const[email,setEmail]=useState('pravin@gmail.com');

    useEffect(()=>{
        setUname("john");
        setEmail("john@gmail.com");
    })
    return(
        <div className="container-fluid p-2">
            <h2>Data Binding</h2>
            <p>Hello ! {uname}</p>
            <p>Your Email {email}</p>
        </div>
    )
}