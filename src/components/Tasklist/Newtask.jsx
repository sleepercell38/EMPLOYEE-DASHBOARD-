import React from 'react'
import { useState } from 'react'

const Newtask = ({data}) => {
  const [istaskaccepted,setistaskaccepted]=useState(false)
    
  const handleclick=()=>{
    setistaskaccepted(true)
    data.taskCount.accepted=data.taskCount.accepted+1
  }




 
  return (
    <div className=' flex-shrink-0 h-full w-[300px] bg-slate-950 rounded-xl '> 

       <div className='flex  items-center justify-between p-5'>
        <h1 className='bg-red-700 p-2 rounded text-xs'>{data.category}</h1>
        <h1 className='text-sm'> {data.taskDate}</h1>
       </div>
       <div className='px-4'>
       <h2 className='text-2xl font-semibold mt-5'>
        {data.taskTitle}
       </h2>
       <p className='mt-5'>{data.taskDescription}</p>
       </div>
              
       <div className='flex items-center justify-between p-4 text-sm'>
       {istaskaccepted
       ?  <div className="flex items-center gap-2 justify-between w-full">
            <button className="bg-green-950 rounded px-2 py-1">
              Mark as Completed
            </button>
            <button className="bg-red-900 rounded px-2 py-1">Mark as Failed</button>
          </div>
          : <div className='flex items-center justify-between p-4 text-sm'>
          <button onClick={handleclick}className='bg-blue-950 rounded px-1' >Accept Task</button>
          
         </div> }
           
          </div>

      
      </div>
      
  )
}

export default Newtask
