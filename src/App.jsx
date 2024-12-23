import React, { useContext, useState } from 'react'
import Login from './components/Auth/Login'
import Employeedashboard from './components/dashboard/Employeedashboard'
import Admindashboard from './components/dashboard/Admindashboard'
import { getlocalstorage, setLocalStorage } from './utils/Localstorage'
import { useEffect } from 'react'
import { Authcontext } from './contexts/Authprovider'

const App = () => {
  
     const [userData,setuserData]= useContext(Authcontext)
  
      
     useEffect(()=>{
        if (userData){
          const loggedinuser= localStorage.getItem("loggedinuser")
          if(loggedinuser){
            setuser(loggedinuser.role)
          }
        }
     },[userData])


     const [user,setuser]=useState()
     const [loggedinUserdata,setloggedinUserdata]=useState(null)

     const formhandler=(email,password)=>{
        if(email=="admin@example.com" && password=="123"){
           localStorage.setItem("loggedinuser",JSON.stringify({"role":"admin"}))
            setuser("admin")
        }else if( userData){
           const employee=userData.find((e)=> email==e.email && password == e.password)
          if(employee){
            setloggedinUserdata(employee);
            localStorage.setItem("loggedinuser",JSON.stringify({"role":"employee"}))
            setuser("employee")
          }
         
        }else{
          alert("invalid credentials!!")
        }
     }

  return (
    <div>
       {!user ? <Login formhandler={formhandler}/>:""}
       {user == "admin"? <Admindashboard  changeuser={setuser}/> :""}
       {user == "employee"? <Employeedashboard changeuser={setuser}  data={loggedinUserdata}/> :""}
    </div>
  )
}

export default App
