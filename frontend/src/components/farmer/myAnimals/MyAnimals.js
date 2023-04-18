import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addAnimal, fetchAnimals } from '../../redux/farmerAnimals/FarmerAnimalsActions';
import AnimalItem from './AnimalItem'

function MyAnimals() {
    
    const status = useSelector((state) => state.myAnimals.status);
    const animals = useSelector((state) => state.myAnimals.myAnimals);
    const dispatch = useDispatch()

    useEffect(()=>{
      dispatch(fetchAnimals())
    }, [])
    

    const forSaleAnimals = animals.map((animal)=><AnimalItem key={animal.id} animal ={animal}/>)


  return (
    <div className='container'>
      {status && <div><h2>loading ...</h2></div>}
        <div className="row">
            {forSaleAnimals}
        </div>
    </div>    
  )
}

export default MyAnimals