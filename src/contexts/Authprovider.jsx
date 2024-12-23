import React, {  createContext, useEffect, useState } from 'react'
import { getlocalstorage, setLocalStorage } from '../utils/Localstorage';




export const Authcontext= createContext();

const Authprovider = ({children}) => {

   const[userData,setuserData]=useState(null)

   useEffect(()=>{
     setLocalStorage();
    const {employees}=getlocalstorage()
    setuserData(employees)
   },[])

  return (
    <div>
       <Authcontext.Provider value={[userData,setuserData]}>
       {children}
       </Authcontext.Provider>
    </div>
  )
}

export default Authprovider
