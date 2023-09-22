import { useState } from 'react';
import './App.css';
import TaskCreate from './components/TaskCreate';
import TaskList from './components/TaskList';

function App() {

  const [tasks,setTasks] = useState([])

  const createTask = (title,taskDesc) => {
    let createdTasks = [
      ...tasks,{
        id:Math.round(Math.random() * 999),
        title:title,
        taskDesc:taskDesc
      }
    ]
    setTasks(createdTasks)
  }

  const deleteTask = (id) => {
    let updatedTasks = tasks.filter(i => i.id !== id)
    setTasks(updatedTasks)
  }

  return (
    <div className="App">
      <TaskCreate onCreate={createTask}/>
      <h1>Görevler</h1>
      <TaskList tasks={tasks} onDeleteTask={deleteTask}/>
    </div>
  );
}

export default App;
