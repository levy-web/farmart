import React, {useEffect} from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";


const FarmersProtectedRoute = ({children}) => {
    
    const user = useSelector((state)=>state.farmer.farmer)

    if (!user){
        return <Navigate to='/farmer-login'/>
    }
    return children
}

export default FarmersProtectedRoute;