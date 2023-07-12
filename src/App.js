import './App.css';
import { useState, useEffect } from 'react';
import Task from './components/Task.js'

function App() {
  // Lockout state
  const [lockoutVisible, setLockoutVisible] = useState(false);
  // Task array state
  const [taskArr, setTaskArr] = useState([]);
  function changeLockoutVisible() {
    setLockoutVisible(!lockoutVisible)
  }

  // TODO: Write function for getting existing tasks from local storage on app load
  useEffect(() => {
    localStorage.getItem("existingTaskArr") ? setTaskArr(JSON.parse(localStorage.getItem("existingTaskArr"))) : setTaskArr([])
  },[])

  function addTask() {
    const newTask = {
        taskTitle: "Task #1",
        taskDesc: "Description of task #1",
        taskDate: "12/31/2023",
        taskId: Math.floor(Math.random() * 100)
    };
    const newAddTaskArr = [...taskArr, newTask]
    setTaskArr(newAddTaskArr);
    localStorage.setItem("existingTaskArr", JSON.stringify(newAddTaskArr))
  }

  // Function for removing a task
  function removeTask(id) {
    // Update task array state
    const newRemTaskArr = taskArr.filter((task) => task.taskId != id);
    setTaskArr(newRemTaskArr);
    // Update the local storage array of tasks
    localStorage.setItem("existingTaskArr", JSON.stringify(newRemTaskArr));
  }

  // TODO: Write function for creating a new task
  
  return (
    <div className="App">
      {lockoutVisible ? (
        <div className="lockout">
          <button className="close-lockout-btn" onClick={addTask}>New Task</button>
          <button className="close-lockout-btn" onClick={changeLockoutVisible}>Close</button>
        </div>
      ) : (
        false
      )}
      <div className="app-header-container">
        <h1>ToDo List</h1>
        <p className='new-task-icon' onClick={changeLockoutVisible}>{lockoutVisible?"x":"+"}</p>
      </div>
      <ul className='todo-card-list'>
        {taskArr.map((task, index) => {
          return <Task task={task} removeTask={removeTask}/>
          // <li className='todo-card' key={task.taskId}>
          //   <h1>{task.taskTitle}</h1>
          //   <p>{task.taskDesc}</p>
          //   <p>{task.taskDate}</p>
          //   <button onClick={ () => removeTask(task.taskId)}>Delete</button>
          // </li>
        }
        )}
      </ul>
    </div>
  );
}

export default App;
