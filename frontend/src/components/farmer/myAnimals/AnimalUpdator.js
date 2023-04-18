import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'

function AnimalUpdator() {
  const [animal, setAnimal] = useState('')
  const [updateName, setUpdateName]= useState('')
  const [updateAge, setUpdateAge] = useState('')

    const params = useParams()


    useEffect(()=>{
        fetch(`/animals/${params.animalsName}`)
        .then((r)=>r.json())
        .then((data)=>{
          setAnimal(data)
          setUpdateAge(data.age)
          setUpdateName(data.name)
          console.log(data)
        })
    }, [])

    console.log(updateAge)
    console.log(updateName)

    function handleDelete(){
      fetch(`/animals/${params.animalsName}`,{
        method:"DELETE"
      })
      .then((r)=>r.json())
      .then((data)=>console.log(data))

    }

    function handleUpdate(){

      const formData = {
        name:updateName,
        age:updateAge
      }

      fetch(`/animals/${params.animalsName}`,{
        method:"PUT",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(formData)
      })
      .then((r)=>r.json())
      .then((data)=>console.log(data))

    }

  return (

    <div className='container p-2'>
      <div className="card mt-3" >
        <div className="row g-0">
          <div className="col-md-6">
            <img src={animal.image_url} className="img-fluid rounded-start" alt={animal.name}></img>
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <label htmlFor="InputName" className="form-label text-capitalize fs-6 fw-bold fst-italic">Animal Name</label>
              <input onChange={(e) => setUpdateName(e.target.value)} className='form-control' value={updateName}/><br/>
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
    
  )
}

export default AnimalUpdator