import React from 'react'
import { useSelector } from "react-redux";
import { Redirect, Route } from 'react-router-dom';

const ProtectedLogin = ({ isAdmin, component:Component, ...rest }) => {

    const { loading, isAuthenticated } = useSelector((state) => state.user);
  return (
    <>
    {loading === false && (
        <Route 
        {...rest}
        render={(props)=>{
            if(isAuthenticated === true){

                return <Redirect to="/"/>
            }
            
            return <Component {...props} />
        }}
        />
    )}
    </>
  )
}

export default ProtectedLogin