import React, { useEffect, useState } from 'react'
import Skeleton from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import { addAnimal, fetchAnimals } from '../../redux/farmerAnimals/FarmerAnimalsActions';
import AnimalItem from './AnimalItem'
import FarmerNav from '../FarmerNav';

function MyAnimals() {
    
    const status = useSelector((state) => state.myAnimals.status);
    const animals = useSelector((state) => state.myAnimals.myAnimals);
    const dispatch = useDispatch()

    useEffect(()=>{
      dispatch(fetchAnimals())
    }, [])
    

    const forSaleAnimals = animals.map((animal)=><AnimalItem key={animal.id} animal ={animal}/>)


  return (
    <>
    <FarmerNav />
    <div className='container'>
      {status && 
      <div className="row">
        
        <div className="col-12 py-5 text-center">
          <h2 className="text-center">loading ...</h2>
          <Skeleton height={40} width={560} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton  height={200}/>
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={200} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={200} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={200} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={200} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={200} />
        </div>
      </div>
      }
        <div className="row">
            {forSaleAnimals}
        </div>
    </div>
    </>  
  )
}

export default MyAnimals