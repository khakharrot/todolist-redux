import './App.css';
import Addtask from './Components/Addtask';
import ListTask from './Components/ListTask';


function App() {
  return (
    <div className='App'>
      <h1>Task to do:</h1>
      <Addtask/>
      <ListTask/> 
    </div>
  );
}

export default App;
