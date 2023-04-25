import React, { useEffect, useState } from 'react'
import FarmerNav from './FarmerNav'

function Profile() {
    const [myProfile, setMyProfile] = useState([])

    useEffect(()=>{
        fetch('/farmer/:id')
        .then((r)=>r.json())
        .then((data)=>{
            setMyProfile(data)
            console.log(data)
        })
    })

  return (
    <>
    <FarmerNav />
    <div className='container'>
        <h3>Farmer Details</h3>
        <br/>
        <div className='m-auto'>
            <img src="" alt="pic" />
            <h2>John Doe</h2>
            <p>Best farm producer seller in town</p>
            <a href="farmer.com">"farmer.com"</a>
        </div>      
    </div>
    </>
  )
}

export default Profile