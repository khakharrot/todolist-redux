import { useSelector } from 'react-redux'
import TaskCard from './TaskCard'

  
function ListTask  () {

  const listOfTask = useSelector((state)=> state.tasklist)
  
  return (
    <div>
      {listOfTask.map((el)=>( <TaskCard el={el}/>
      )
      ) }
     
    </div>
  )
}

export default ListTask
