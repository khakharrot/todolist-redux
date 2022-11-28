import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addhandler } from '../Redux/Actions'



function Addtask() {
  const [task,setTask] = useState ("")
  const [isDone,setisDone]= useState (false)
  const dispatch = useDispatch ()
  const Input = (e)=>setTask (e.target.value)
  
   

  const addTask = () =>{
  const newTask = {task,isDone,id:Math.random()};

   dispatch (addhandler (newTask));
   setTask("")
  }



  return (
    <div>
      <input type="text" onChange={Input} value={task} />
      <button onClick={addTask}>Add task to do</button>
    </div>
  )
}

export default Addtask
