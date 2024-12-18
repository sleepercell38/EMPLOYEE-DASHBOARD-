import React from 'react'
import Accepttask from '../Tasklist/Accepttask'
import Completedtask from '../Tasklist/Completedtask'
import Failedtask from '../Tasklist/Failedtask'
import Newtask from '../Tasklist/Newtask'





const Taskcards = ({data}) => {

  return (
    
    <div id="tasklist" className=' overflow-x-auto flex item-center justify-start flex-nowrap w-full h-[50%]  px-5 py-5 gap-5'>
      
      {data.tasks.map((elem)=>{
              
              if(elem.newTask){
                return <Newtask     data={elem} />
              }
              if(elem.completedTask){
                return <Completedtask    data={elem}/>
              }
              if(elem.failedTask){
                return <Failedtask    data={elem}/>
              }
              if(elem.acceptedTask){
                return<Accepttask    data={elem}/>
              }




      })}
    </div>
    
  )
}

export default Taskcards