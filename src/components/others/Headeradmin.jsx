import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserTie } from '@fortawesome/free-solid-svg-icons'

const Headeradmin = () => {
  return (
   <div className='flex items-center justify-between py-5 px-10'>
     <div>
      <h1 className='text-xl'>Hello </h1><h1 className='text-4xl font-black '>Vishal 👋 </h1>
    </div>
    <div>
      <h1 className='text-2xl font-black '>Administrator Dashboard &nbsp; &nbsp; &nbsp;<FontAwesomeIcon icon={faUserTie} /></h1>
    </div>

    <button className='bg-red-700 rounded px-2 font-semibold'> Logout</button>
    
   </div>
   
  )
}
export default Headeradmin