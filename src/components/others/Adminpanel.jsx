import React, { useContext, useState } from 'react'
import Alltask from './Alltask'
import { Authcontext } from '../../contexts/Authprovider';

const Adminpanel = () => {

  const [task, settask] = useState([]);

  const [userData, setuserData] = useContext(Authcontext)


  const [taskTitle, settaskTitle] = useState("");
  const [taskDate, settaskDate] = useState("");
  const [taskDescription, settaskDescription] = useState("");
  const [category, setcategory] = useState("");
  const [assignTo, setassignTo] = useState("");


  const submithandler = (e) => {
    e.preventDefault()
    console.log("task created")

    settask({ taskTitle, taskDate, taskDescription, category, newTask: true, completedTask: false, failedTask: false, acceptedTask: false })
    const data = userData;
    console.log(data)
    data.forEach((elem) => {
      if (elem.name == assignTo) {
        elem.tasks.push(task)
        console.log(elem)
        elem.taskCounts.active = elem.taskCounts.active + 1

        settaskTitle("")
        settaskDate("")
        settaskDescription("")
        setcategory("")
        setassignTo("")

      }

    }
    );
    setuserData(data);
    console.log(data)
  }
  return (
    <div className=' mx-40 bg-slate-900 py-5 rounded-md'>
      <form onSubmit={(e) => {
        submithandler(e)
      }
      } className='flex items-start justify-between mt-0 px-20 '>
        <div>
          <h2>Task Title</h2>
          <input
            value={taskTitle}
            onChange={(e) => settaskTitle(e.target.value)}

            required className="w-60  border border-slate-700 bg-slate-800 px-2 rounded-sm" type="text" placeholder='Add your Task-title' />
          <br />
          <br />
          <h2>Date</h2>
          <input
            value={taskDate}
            onChange={(e) => settaskDate(e.target.value)}

            required className='w-60 border border-slate-700 bg-slate-800 px-2 rounded-sm' type="date" />
          <br />
          <br />
          <h2>Assign To</h2>
          <input
            value={assignTo}
            onChange={(e) => setassignTo(e.target.value)}
            required className="w-60 border border-slate-700 bg-slate-800 px-2  rounded-sm" type="text" placeholder='Employee name' />
          <br />
          <br />
          <h2>Category</h2>

          <input
            value={category}
            onChange={(e) => setcategory(e.target.value)}
            required className="w-60  border border-slate-700 bg-slate-800 px-2  rounded-sm" type="text" placeholder='Dev, UI-design,AI..etc' />
        </div>

        <div className='flex flex-col items-center'>
          <h2>Description</h2>
          <textarea
            value={taskDescription}
            onChange={(e) => {
              settaskDescription(e.target.value)

            }} required className='w-50  border border-slate-700 bg-slate-800 px-2 rounded' name="" id="" cols={35} rows={9}></textarea>
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
