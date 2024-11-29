import React, {  createContext, useEffect, useState } from 'react'
import { getlocalstorage, setLocalStorage } from '../utils/Localstorage';




export const Authcontext= createContext();

const Authprovider = ({children}) => {

   const[userData,setuserData]=useState(null)

   useEffect(()=>{
     setLocalStorage();
    const {employees,admin}=getlocalstorage()
    setuserData({employees,admin})
   },[])

  return (
    <div>
       <Authcontext.Provider value={userData}>
       {children}
       </Authcontext.Provider>
    </div>
  )
}

export default Authprovider
