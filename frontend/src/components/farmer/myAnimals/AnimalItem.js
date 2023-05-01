import React from 'react'
import {  NavLink } from "react-router-dom"

function AnimalItem({animal}) {

  return (
    
    <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-2 mt-2">
      <NavLink className="text-decoration-none" to={`/farm/animals/${animal.name}`}>
        <div className="card text-center h-100">
            <img src={animal.image_url} className="card-img-top p-3" alt={animal.name}></img>
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