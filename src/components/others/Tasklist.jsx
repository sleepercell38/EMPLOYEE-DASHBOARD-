import React from 'react'

const Tasklist = ({data}) => {
  return (
    <div className='flex gap-3 mt-5 justify-center p-2 '>

      <div className='bg-slate-800  w-[15%] flex flex-col p-5 rounded-lg'>
        <h1 className='text-l font-semibold'>NEW TASK</h1>
        <h2 className='text-2xl font-semibold'>{data.taskCounts.active}</h2>
      </div>
      <div className='bg-slate-800  w-[18%] flex flex-col p-5 rounded-lg'>
        <h1 className='text-l font-semibold'>COMPLETED TASK</h1>
        <h2 className='text-2xl font-semibold'>{data.taskCounts.completed}</h2>
      </div>
      <div className='bg-slate-800 w-[18%] flex flex-col p-5 rounded-lg'>
        <h1 className='text-l font-semibold'>ACCEPTED TASK</h1>
        <h2 className='text-2xl font-semibold'>{data.taskCounts.accepted}</h2>
      </div>
      <div className='bg-slate-800  w-[15%] flex flex-col p-5 rounded-lg'>
        <h1 className='text-l font-semibold'>FAILED TASK</h1>
        <h2 className='text-2xl font-semibold'>{data.taskCounts.failed}</h2>
      </div>
    </div>
  )
}

export default Tasklist
