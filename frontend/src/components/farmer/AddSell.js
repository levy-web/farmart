import React, { useState } from 'react'
// import { useDispatch, useSelector } from "react-redux";
// import { addAnimal } from '../redux/farmerAnimals/FarmerAnimalsActions';
import { useDispatch, useSelector } from "react-redux";
import FarmerNav from './FarmerNav';
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-hot-toast';

function AddSell() {
  const [name, setName] = useState('')
  const [type, setType] = useState('')
  const [weight, setWeight] = useState('')
  const [price, setPrice] = useState('')
  const [breed, setBreed] = useState('')
  const [age, setAge] = useState('')
  const [category, setCategory] = useState('')
  const [image, setImage] = useState(null)
  const navigate = useNavigate()
  const token = useSelector((state)=>state.farmer.token)

  // const dispatch = useDispatch()

  function nameChange(e){
    setName(e.target.value)
  }

  function typeChange(e){
    setType(e.target.value)
    console.log(e.target.value)
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
    // data.append("animal[farmer_id]", 2);
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
      headers: {
        Authorization: `Bearer ${token}`
      },
      body:data

     })
     .then((r)=>r.json())
     .then((data)=>{
      console.log(data)
      toast.success("succesfully added to your animals")
      navigate("/farm/for_sale")
    })

  }


  return (
    <>
    <FarmerNav/>
    <div className='container my-3 py-3'>
      <div className="row my-4 h-100">
        <div className="col-md-7 col-lg-8 col-sm-8 mx-auto">
          <div className="card shadow p-5">
            <h2 className='text-center mb-5'>Add new animal</h2>
              <form onSubmit={handleSubmit}>
                
                  <div className="form-group mb-3"> 
                    <input type="text" required name='name' placeholder="animal name" value={name} onChange={nameChange} className="form-control" id="staticEmail"></input>
                  </div>
                  <div className="form-group mb-3"> 
                    <select required value={type} onChange={typeChange} className="form-control" aria-label="Default select example" >
                      <option defaultValue>select animal type</option>
                      <option defaultValue="Cow">Cow</option>
                      <option value="Goat">Goat</option>
                      <option value="Sheep">Sheep</option>
                      <option value="Bird">Bird</option>
                      <option value="Horse">Horse</option>
                      <option value="Fish">Fish</option>
                      <option value="Pig">Pig</option>
                      <option value="Donkey">Donkey</option>
                      <option value="Carmel">Carmel</option>
                      <option value="Rabbit">Rabbit</option>
                      <option value="Cat">Cat</option>
                      <option value="Dog">Dog</option>
                    </select>
                  </div>

                  <div className="form-group mb-3"> 
                    <input required type="number" name='weight' placeholder="weight" value={weight} onChange={weightChange} className="form-control" id="staticEmail"></input>
                  </div>

                  <div className="form-group mb-3">       
                    <input required type="number" name='price' placeholder="price" value={price} onChange={priceChange} className="form-control" id="staticEmail"></input>
                  </div>

                  <div className="form-group mb-3">          
                    <input required type="text" name='breed' placeholder="breed" value={breed} onChange={breedChange} className="form-control" id="inputPassword"></input>
                  </div>

                  <div className="form-group mb-3">         
                    <input required type="number" name='age' placeholder="age" value={age} onChange={ageChange} className="form-control" id="inputPassword"></input>
                  </div>

                  <div className="form-group mb-3">                       
                    <input required onChange={imageChange} className="form-control" type="file" id="formFile"></input>
                  </div>

                  <button className='mt-2 form-control bg-primary text-white' type='submit'>Sell Animal</button>
              </form>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default AddSell