import React, { useEffect, useState } from 'react'
import Skeleton from "react-loading-skeleton";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { addAnimal, fetchAnimals } from '../../redux/farmerAnimals/FarmerAnimalsActions';
import AnimalItem from './AnimalItem'
import FarmerNav from '../FarmerNav';

function MyAnimals() {
    
    const status = useSelector((state) => state.myAnimals.status);
    const animals = useSelector((state) => state.myAnimals.myAnimals);
    const token = useSelector((state)=>state.farmer.token)
    const dispatch = useDispatch()

    useEffect(()=>{
      dispatch(fetchAnimals(token))
    }, [])

    const EmptyAnimals = () => {
      return (
        <div className="container mt-2">
          <div className="row">
            <div className="col-md-12 py-5 bg-light text-center">
              <h4 className="p-3 display-5">You don't have any animal</h4>
              <Link to="/farm/add_for_sale" className="btn  btn-outline-dark mx-4">
                <i className="fa fa-arrow-right"></i> Add animals
              </Link>
            </div>
          </div>
        </div>
      );
    };

    const forSaleAnimals = animals.map((animal)=><AnimalItem key={animal.id} animal ={animal}/>)

    const ShowMyAnimals = () => {
      return(
        <div className="row">
         {forSaleAnimals}
        </div>

      )
    }
    

    


  return (
    <>
    <FarmerNav />
    <div className='container'>
      {status && 
      <div className="row">
        
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
      {animals.length > 0 ? <ShowMyAnimals/> : <EmptyAnimals />} 
    </div>
    </>  
  )
}

export default MyAnimals