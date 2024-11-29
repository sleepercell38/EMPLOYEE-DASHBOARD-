import React from 'react'
import Header from '../others/Header'
import Tasklist from '../others/Tasklist'
import Taskcards from '../others/Taskcards'

const Employeedashboard = ({data}) => {
  console.log(data)
  return (
   
   <div className='bg-slate-900 h-screen'>
     
   
   <Header data={data} />
   <Tasklist   data={data} />
   <Taskcards  data={data} />
   </div>
  )
}

export default Employeedashboard
