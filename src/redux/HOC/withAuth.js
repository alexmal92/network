import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const withAuth = (Component) => (props) => {
  const isAuth = useSelector(state => state.authReducer.isAuth)

  return (isAuth) 
    ? <Component {...props} />
    : <Navigate to= '/login' />
    
}

export default withAuth