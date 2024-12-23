import React, { useContext } from 'react'
import Authprovider, { Authcontext } from '../../contexts/Authprovider'

const Alltask = () => {

   const [userData,setuserData]= useContext(Authcontext)
  //  console.log(authdata)

  return (
   

 
    <div id="alltask"className=' flex flex-col px-40 mt-5 '>
              <div className='flex items-center justify-between bg-green-900 rounded mt-2 p-3'>
            <h2 className='w-1/5'>EMPLOYEE NAME</h2>
            <h4 className='w-1/5'>COMPLETED TASKS</h4>
            <h5 className='w-1/5'>ACCEPTED TASKS</h5>
            <h5 className='w-1/5'>FAILED TASKS</h5>
            <h5 className='w-1/5'>NEW TASKS</h5>
          </div>
           {userData.map((elem)=>{
            return <div className='flex items-center justify-between border border-slate-700 bg-slate-800 rounded mt-2 p-3'>
            <h2 className='w-1/6'>{elem.name}</h2>
            <h4 className='w-1/6'>{elem.taskCounts.completed}</h4>
            <h4 className='w-1/6'>{elem.taskCounts.accepted}</h4>
            <h4 className='w-1/6'>{elem.taskCounts.failed}</h4>
            <h4 className='w-1/6'>{elem.taskCounts.active}</h4>
            
          </div>
           })}
      
     
    </div>
  )
}

export default Alltask
