import {TaskData} from "../Components/TaskData";
import { ADD_TASK,SEARCH,EDIT } from "./actionTypes";

const initState= {
    tasklist: TaskData,
}

function Reducer(state=initState, action) {
  switch (action.type) {
  case ADD_TASK:
  return {
    ...state, tasklist: [...state.tasklist, action.payload]
  }
  case EDIT:
  return {
    ...state,
    tasklist: state.tasklist.map ((el)=>
    el.id === action.payload.id ? {...el,task:action.payload.text} : el
    )
  }
  case SEARCH:
    return {
    ...state,
    tasklist: state.tasklist.filter((el)=> el.isDone===false)
    }

  default: return state}
}

export default Reducer
