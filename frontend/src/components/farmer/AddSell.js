import React, { useState } from 'react'
// import { useDispatch, useSelector } from "react-redux";
// import { addAnimal } from '../redux/farmerAnimals/FarmerAnimalsActions';
import FarmerNav from './FarmerNav';

function AddSell() {
  const [name, setName] = useState('')
  const [type, setType] = useState('')
  const [weight, setWeight] = useState('')
  const [price, setPrice] = useState('')
  const [breed, setBreed] = useState('')
  const [age, setAge] = useState('')
  const [category, setCategory] = useState('')
  const [image, setImage] = useState(null)
  // const dispatch = useDispatch()

  function nameChange(e){
    setName(e.target.value)
  }

  function typeChange(e){
    setType(e.target.value)
  }

  function weightChange(e){
    setWeight(e.target.value)
  }

  function priceChange(e){
    setPrice(e.target.value)
  }

  function breedChange(e){
    setBreed(e.target.value)
  }

  function categoryChange(e){
    setCategory(e.target.value)
  }

  function ageChange(e){
    setAge(e.target.value)
  }

  function imageChange(e){
    setImage(e.target.files[0])
    console.log(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()
    const data = new FormData();

    data.append("animal[name]", name);
    data.append("animal[animal_type]", type);
    data.append("animal[age]", age);
    data.append("animal[breed]", breed);
    data.append("animal[weight]", weight);
    data.append("animal[farmer_id]", 2);
    data.append("animal[price]", price);
    data.append("animal[image]", image);

    handleSubmitToApi(data)


  }

  function handleSubmitToApi(data){
    // e.preventDefault()
    //  const formData = {
    //   name:name,
    //   stock:stock,
    //   age:age,
    //   breed:breed,
    //   category:category,
    //   farmer_id:2,
    //   order_id:2,
    //   img_url:"https://robohash.org/animiquiomnis.png?size=300x300&set=set1"
    //  }

    //  dispatch(addAnimal(formData))

     fetch('https://farmart-api.onrender.com/animals',{
      method: "POST",
      body:data

     })
     .then((r)=>r.json())
     .then((data)=>{
      console.log(data)
    })

  }


  return (
    <>
    <FarmerNav/>
    <div className='container mt-3 p-5'>
      <h2 className='text-center mb-5'>Insert your new animal</h2>
      <form onSubmit={handleSubmit} className="row m-auto g-3">
        
          <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
          <input type="text" name='name' value={name} onChange={nameChange} className="form-control" id="staticEmail"></input>
       
          <label htmlFor="inputName" className="col-sm-2 col-form-label">Type</label>         
          <input type="text" name='type' value={type} onChange={typeChange} className="form-control" id="staticEmail"></input>

          <label htmlFor="inputName" className="col-sm-2 col-form-label">Weight</label>         
          <input type="number" name='weight' value={weight} onChange={weightChange} className="form-control" id="staticEmail"></input>

          <label htmlFor="inputName" className="col-sm-2 col-form-label">Price</label>         
          <input type="number" name='price' value={price} onChange={priceChange} className="form-control" id="staticEmail"></input>
       
          <label htmlFor="inputBreed" className="col-sm-3 col-form-label">Breed</label>          
          <input type="text" name='breed' value={breed} onChange={breedChange} className="form-control" id="inputPassword"></input>
              
          <label htmlFor="inputAge" className="col-sm-3 col-form-label">Age</label>          
          <input type="number" name='age' value={age} onChange={ageChange} className="form-control" id="inputPassword"></input>
        
          <label htmlFor="inputImage" className="col-sm-2 col-form-label">Image</label>          
          <input onChange={imageChange} className="form-control" type="file" id="formFile"></input>

          <button className='mt-2 form-control bg-primary text-white' type='submit'>Sell Animal</button>
      </form>
    </div>
    </>
  )
}

export default AddSell