import React from 'react'
import Alltask from './Alltask'

const Adminpanel = () => {
  return (
    <div className=' mx-40 bg-slate-900 py-5 rounded-md'>
      <form className='flex items-start justify-between mt-0 px-20 '>
      <div>
        <h2>Task Title</h2>
        <input required className="w-60  border border-slate-700 bg-slate-800 px-2 rounded-sm"type="text" placeholder='Add your Task-title'/>
        <br />
        <br />
        <h2>Date</h2>
        <input required className='w-60 border border-slate-700 bg-slate-800 px-2 rounded-sm' type="date"/>
        <br />
        <br />
        <h2>Assign To</h2>
        <input required className="w-60 border border-slate-700 bg-slate-800 px-2  rounded-sm" type="text" placeholder='Employee name'/>
        <br />
        <br />
        <h2>Category</h2>
        <input required className="w-60  border border-slate-700 bg-slate-800 px-2  rounded-sm" type="text" placeholder='Dev, UI-design,AI..etc'/>

      </div>

      <div className='flex flex-col items-center'>
           <h2>Description</h2>
           <textarea  required className='w-50  border border-slate-700 bg-slate-800 px-2 rounded' name="" id="" cols={35}rows={9}></textarea>
           <br />
           <button className='flex items-center justify-center  rounded bg-green-800 font-semibold px-2 w-full'>
            Create Task
           </button>

      </div>
      </form>
      
    </div>
  )
}

export default Adminpanel
