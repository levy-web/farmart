
import React, { useEffect, useState } from 'react'
import FarmerNav from './FarmerNav'
import { useDispatch, useSelector } from "react-redux";
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
function Profile() {
const [myProfile, setMyProfile] = useState([])
const user = useSelector((state) => state.farmer.farmer);
const isLoading = useSelector((state) => state.farmer.isLoading);
const error = useSelector((state) => state.farmer.error);
const token = useSelector((state)=>state.farmer.token)
console.log(user)
useEffect(()=>{
    fetch(`https://farmart-api.onrender.com/farmers/${user.data.user.id}`,{
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("TOKEN")}`
        }
    })
    .then((r)=>r.json())
    .then((data)=>{
        setMyProfile(data)
        console.log(data)
    })
},[])
return (
    <>
    <FarmerNav />
        <div className='container'>
        <h3 className='text-center'>Farmer Details</h3>
        <br/>
        <div className='d-flex justify-content-center align-items-center'>
        <img src="https://via.placeholder.com/150" alt="Profile avatar" className='rounded-circle me-3' />
        <div>
        <h2>{myProfile.admin_name}</h2>
        <p className='fw-bold'>Farm name: {myProfile.farm_name}</p>
        <a href="/" className='text-muted'>farmart.com</a>
        </div>
        </div>
        <br/>
        <Card className='w-75 m-auto'>
        <ListGroup>
        <ListGroupItem>Location: {myProfile.location}</ListGroupItem>
        {/* <ListGroupItem>Experience: {myProfile.experience}</ListGroupItem> */}
        <ListGroupItem>Contact: {myProfile.contact_info}</ListGroupItem>
        {/* <ListGroupItem>Description: {myProfile.description}</ListGroupItem> */}
        </ListGroup>
        </Card>
        </div>
    </>
    )
    }
    export default Profile