import React from 'react'
import {  NavLink } from "react-router-dom"

function AnimalItem({animal}) {

  return (
    
    <div className="col-sm-2">
      <NavLink className="text-decoration-none" to={`/animals/${animal.name}`}>
        <div className="card m-1 h-100">
            <img src={animal.image_url} className="card-img-top" alt={animal.name}></img>
            <div className="card-body">
                <h5 className="card-title">name: {animal.name}</h5>
                <h5 className="card-title">age: {animal.age}</h5>
                {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
        </div>
        </NavLink>
    </div>
    
  )
}

export default AnimalItem