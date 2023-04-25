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
        <h3>farmer details</h3>
        <br/>
        <div className='m-auto'>
            <img src="" alt="pic" />
            <h2>john doe</h2>
            <p>best farm producer seller in town</p>
            <a href="farmer.com">"farmer.com"</a>
        </div>
    </div>
    </>
  )
}

export default Profile

// import React, { useEffect, useState } from 'react'
// import FarmerNav from './FarmerNav'
// import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
// function Profile() {
// const [myProfile, setMyProfile] = useState([])
// useEffect(()=>{
//     fetch('/farmer/:id')
//     .then((r)=>r.json())
//     .then((data)=>{
//         setMyProfile(data)
//         console.log(data)
//     })
// })
// return (
//     <>
//     <FarmerNav />
//     <div className='container'>
//     <h3 className='text-center'>Farmer Details</h3>
//     <br/>
//     <div className='d-flex justify-content-center align-items-center'>
//     <img src="https://via.placeholder.com/150" alt="Profile avatar" className='rounded-circle me-3' />
//     <div>
//     <h2>John Doe</h2>
//     <p className='fw-bold'>Best farm producer seller in town</p>
//     <a href="farmer.com" className='text-muted'>farmer.com</a>
//     </div>
//     </div>
//     <br/>
//     <Card className='w-75 m-auto'>
//     <ListGroup>
//     <ListGroupItem>Location: {myProfile.location}</ListGroupItem>
//     <ListGroupItem>Experience: {myProfile.experience}</ListGroupItem>
//     <ListGroupItem>Contact: {myProfile.contact}</ListGroupItem>
//     <ListGroupItem>Description: {myProfile.description}</ListGroupItem>
//     </ListGroup>
//     </Card>
//     </div>
//     </>
//     )
//     }
//     export default Profile
