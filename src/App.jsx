import React, { useContext, useState } from 'react'
import Login from './components/Auth/Login'
import Employeedashboard from './components/dashboard/Employeedashboard'
import Admindashboard from './components/dashboard/Admindashboard'
import { getlocalstorage, setLocalStorage } from './utils/Localstorage'
import { useEffect } from 'react'
import { Authcontext } from './contexts/Authprovider'

const App = () => {
  
    const authdata=useContext(Authcontext)
    console.log(authdata);
      
    //  useEffect(()=>{
    //     if (authdata){
    //       const loggedinuser= localStorage.getItem("loggedinuser")
    //       if(loggedinuser){
    //         setuser(loggedinuser.role)
    //       }
    //     }
    //  },[authdata])


     const [user,setuser]=useState()
     const [loggedinUserdata,setloggedinUserdata]=useState(null)

     const formhandler=(email,password)=>{
        if(authdata&&  authdata.admin.find((e)=> email==e.email && password == e.password) ){
           localStorage.setItem("loggedinuser",JSON.stringify({"role":"admin"}))
            setuser("admin")
        }else if( authdata){
           const employee=authdata.employees.find((e)=> email==e.email && password == e.password)
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
       {user == "admin"? <Admindashboard/> :""}
       {user == "employee"? <Employeedashboard   data={loggedinUserdata}/> :""}
    </div>
  )
}

export default App
