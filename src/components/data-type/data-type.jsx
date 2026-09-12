import { useState } from "react";


export function Data(){

    const[product]=useState({Name:'Samsung TV',Price:45000,ShippedTo:['Delhi','Hyd'],Rating:{Rate:4.3,Count:600}})

    return(
        <div className="container-fluid">
            <h3>Product Details</h3>
            <dl>
                <dt>Name</dt>
                <dd>{product.Name}</dd>
                <dt>Price</dt>
                <dd>{product.Price.toLocaleString('en-in',{style:'currency',currency:'INR',minimumFractionDigits:0})}</dd>
                <dt>Shipped To</dt>
                <dd>
                    <ul>
                       {
                        product.ShippedTo.map(city=><li key={city}>{city}</li>)
                       }
                    </ul>
                </dd>
                <dt>Ratings</dt>
                <dd>
                    <span className="badge bg-success rounded p-2">
                        {product.Rating.Rate}<span className="bi bi-star-fill"></span>
                    </span>
                    <span className="fw-bold text-secondary">{product.Rating.Count}</span>
                </dd>
            </dl>
        </div>
    )
}