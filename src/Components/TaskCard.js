import React from 'react'
import Modal from "react-modal";
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { edittaskk } from '../Redux/Actions'

function Task({el}) {
  const dispatch = useDispatch ()

  const Input = (e)=>setEdit(e.target.value)
  const [edit,setEdit] = useState(el.task)
  const [modalIsOpen, setIsOpen] = useState(false);
  function open() {
    setIsOpen(true);
  }
  function close() {
    setIsOpen(false);
  }
  const EditTask = () => {
   dispatch (edittaskk ({id:el.id,text:edit}))
    setIsOpen(false)
  }
const EditDone = () => {
  el.isDone=== true? el.isDone= false : el.isDone=true
}
 console.log (el.isDone)
const done = {color:'green'}
const notdone = {color: 'red'}

  return (
    <div className='Card'>
      <span style={el.isDone === true? done:notdone} >Task: {el.task}</span> 
      <button onClick={open}>Edit</button>
      <button onClick={EditDone}> {el.isDone=== true ? "Undone": "Done" }  </button>
      <Modal isOpen={modalIsOpen}>
        <h3>Edit the task:</h3>
        <input type="text" onChange={Input} value={edit}/>
        <button onClick={EditTask}>Register</button>
        <button onClick={close}>Close</button>
      </Modal>
    </div>
  )
}

export default Task
