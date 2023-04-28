import React, {useEffect} from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";


const ProtectedRoute = ({children}) => {
    
    const buyer = useSelector((state)=>state.user.buyer)

    if (!buyer){
        return <Navigate to='/login'/>
    }
    return children
}

export default ProtectedRoute;