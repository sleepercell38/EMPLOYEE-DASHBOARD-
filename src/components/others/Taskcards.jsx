import React from 'react'
import Accepttask from '../Tasklist/Accepttask'

const Taskcards = ({data}) => {
  return (
    <div id="tasklist" className=' overflow-x-auto flex item-center justify-start flex-nowrap w-full h-[50%]  px-5 py-5 gap-5'>
      <Accepttask  data={data}/>
      
      
     
      
      
    </div>
  )
}

export default Taskcards
