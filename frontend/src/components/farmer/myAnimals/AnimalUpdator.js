import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import FarmerNav from '../FarmerNav'
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";



function AnimalUpdator() {
  const [animal, setAnimal] = useState('')
  const [updateWeight, setUpdateWeight]= useState('')
  const [updatePrice, setUpdatePrice]= useState('')
  const [updateAge, setUpdateAge] = useState('')
  const navigate = useNavigate()
  const token = useSelector((state)=>state.farmer.token)


    const params = useParams()


    useEffect(()=>{
        fetch(`https://farmart-api.onrender.com/animals/${params.animalsName}`,{
          headers: {
            Authorization: `Bearer ${token}`
          },
        })
        .then((r)=>r.json())
        .then((data)=>{
          setAnimal(data)
          setUpdateAge(data.age)
          setUpdatePrice(data.price)
          setUpdateWeight(data.weight)
          console.log(data)
          
        })
    }, [])

    console.log(updateAge)
    console.log(updateWeight)

    function handleDelete(){
      fetch(`https://farmart-api.onrender.com/animals/${params.animalsName}`,{
        method:"DELETE",
        headers: {
          Authorization: `Bearer ${token}`
        },
      })
      .then((r)=>r.json())
      .then((data)=>{
        console.log(data)
        navigate("/farm/for_sale")
      })

    }

    function handleUpdate(){

      const formData = {
        age:updateAge,
        price:updatePrice,
        weight: updateWeight
      }

      fetch(`https://farmart-api.onrender.com/animals/${params.animalsName}`,{
        method:"PUT",
        headers:{
          "Content-Type":"application/json",
          "Authorization": `Bearer ${token}`
        },
        body:JSON.stringify(formData)
      })
      .then((r)=>r.json())
      .then((data)=>{
        console.log(data)
        navigate("/farm/for_sale")
      })

    }

  return (
    <>
    <FarmerNav/>
    <div className='container p-2'>
      <div className="card mt-3" >
        <div className="row g-0">
          <div className="col-md-6">
            <img src={animal.image_url} className="img-fluid rounded-start" alt={animal.name}></img>
          </div>
          <div className="col-md-6">
            <div className="card-body">
            <label htmlFor="InputName" className="form-label text-capitalize fs-6 fw-bold fst-italic">{`Name: ${animal.name}`}</label><br/>
              <label htmlFor="inputName" className="form-label text-capitalize fs-6 fw-bold fst-italic">{`Type: ${animal.animal_type}`}</label><br/>
              <label htmlFor="inputBreed" className="form-label text-capitalize fs-6 fw-bold fst-italic">{`Breed: ${animal.breed}`}</label><br/>   
        

              <label htmlFor="inputName" className="form-label text-capitalize fs-6 fw-bold fst-italic">Weight</label>         
              <input type="number" name='weight' value={updateWeight} onChange={(e)=>setUpdateWeight(e.target.value)} className="form-control" id="staticEmail"></input>

              <label htmlFor="inputName" className="form-label text-capitalize fs-6 fw-bold fst-italic">Price</label>         
              <input type="number" name='price' value={updatePrice} onChange={(e)=>setUpdatePrice(e.target.value)} className="form-control" id="staticEmail"></input>
          
              <label htmlFor="InputName" className="form-label text-capitalize fs-6 fw-bold fst-italic">Animal Age</label>
              <input onChange={(e) => setUpdateAge(e.target.value)} className='form-control' value={updateAge}/>
              {/* <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
            </div>
          </div>
        </div>
        <span className='ms-auto me-2 mb-2'>
          <button onClick={handleUpdate} className='text-success ms-auto me-2 mb-2'>save</button>
          <button onClick={handleDelete} className='text-danger ms-auto me-2 mb-2'>delete</button>
        </span>
      </div>      
    </div>
    </>
    
  )
}

export default AnimalUpdator