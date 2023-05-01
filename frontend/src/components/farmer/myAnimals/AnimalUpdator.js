import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import FarmerNav from '../FarmerNav'
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-hot-toast';



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
        toast.success(`${data.name} deleted succesfully`)
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
        toast.success(`${data.name} updated succesfully`)
        navigate("/farm/for_sale")
      })

    }

  return (
    <>
    <FarmerNav/>
    <div className='container my-5 py-2'>
        <div className="row">
          
          <div className="col-md-6 col-sm-12 py-3">
            <img src={animal.image_url} className="img-fluid" alt={animal.name}></img>
          </div>
          <div className="col-md-6 col-md-6 py-5">
              {/* <button onClick={handleDelete} className='form-control btn btn-danger ms-auto me-2 mb-2'>delete</button> */}
              
              <h4 className="text-uppercase text-muted">{animal.animal_type}</h4>
              <h1 className="display-5">{animal.name}</h1>
              <p className="lead">{animal.breed}</p> 
        

              <label htmlFor="inputName" className="form-label text-capitalize fs-6 fw-bold fst-italic">Weight</label>         
              <input type="number" name='weight' value={updateWeight} onChange={(e)=>setUpdateWeight(e.target.value)} className="form-control" id="staticEmail"></input>

              <label htmlFor="inputName" className="form-label text-capitalize fs-6 fw-bold fst-italic">Price</label>         
              <input type="number" name='price' value={updatePrice} onChange={(e)=>setUpdatePrice(e.target.value)} className="form-control" id="staticEmail"></input>
          
              <label htmlFor="InputName" className="form-label text-capitalize fs-6 fw-bold fst-italic">Animal Age</label>
              <input onChange={(e) => setUpdateAge(e.target.value)} className='form-control' value={updateAge}/>
              <button onClick={handleUpdate} className='form-control btn btn-success ms-auto me-2 mt-2'>update</button>
              <button onClick={handleDelete} className='form-control btn btn-danger ms-auto me-2 mt-2'>delete</button>
        </div>
      </div>      
    </div>
    </>
    
  )
}

export default AnimalUpdator