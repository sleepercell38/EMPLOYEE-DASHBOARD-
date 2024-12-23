import React from 'react'
import Header from '../others/Header'
import Tasklist from '../others/Tasklist'
import Taskcards from '../others/Taskcards'

const Employeedashboard = (props) => {
  return (
   
   <div className='bg-slate-900 h-screen'>
     
   
   <Header   changeuser={props.changeuser} data={props.data} />
   <Tasklist   data={props.data} />
   <Taskcards  data={props.data} />
   </div>
  )
}

export default Employeedashboard
