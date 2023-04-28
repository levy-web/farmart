import React, {useEffect} from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";


const FarmersProtectedRoute = ({children}) => {
    
    const farmer = useSelector((state)=>state.farmer.farmer)

    if (!farmer){
        return <Navigate to='/farmer-login'/>
    }
    return children
}

export default FarmersProtectedRoute;