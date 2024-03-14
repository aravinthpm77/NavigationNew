import React from "react";
import { Route,Routes } from "react-router-dom";
import Home from  './page/Home/Home'

const AllRoutes =()=>{
    return(
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            
        </Routes>
        
   )
} 

export default AllRoutes;