import axios from "axios";
import { useEffect, useState } from "react"


export function Nasa(){

    const[marsObject,setMarsObject]=useState({photos:[]});

    function LoadData(){
        axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=22OvGWQh8gKK4c4KYLfadZTGWswYLfkU6rlKhf02')
        .then(response=>{
            setMarsObject(response.data)
        })
    }

    useEffect(()=>{
        LoadData();
    })

    return(
        <div className="container-fluid">
            <h2>Mars Rover Photos Table</h2>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Photos ID</th>
                        <th>Preview</th>
                        <th className="bi bi-camera">Camera</th>
                        <th className="bi bi-rocket">Rover</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        marsObject.photos.map(item=>
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td><img width="100" height="100" src={item.img_src} /></td>
                                <td>{item.camera.full_name}</td>
                                <td>{item.rover.name}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}