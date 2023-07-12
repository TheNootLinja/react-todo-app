import './App.css';
import { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import NewTaskForm from './components/NewTaskForm';
import Lockout from './components/Lockout';

function App() {
  // Lockout state
  const [lockoutVisible, setLockoutVisible] = useState(false);
  // Task array state
  const [taskArr, setTaskArr] = useState([]);
  function changeLockoutVisible() {
    setLockoutVisible(!lockoutVisible)
  }

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
        <Lockout>
          <NewTaskForm />
          {/* <button className="close-lockout-btn" onClick={addTask}>New Task</button>
          <button className="close-lockout-btn" onClick={changeLockoutVisible}>Close</button> */}
        </Lockout>
      ) : (
        false
      )}
      <div className="app-header-container">
        <h1>ToDo List</h1>
        <p className='new-task-icon' onClick={changeLockoutVisible}>{lockoutVisible?"x":"+"}</p>
      </div>
      <TaskList taskArr={taskArr} removeTask={removeTask}>
        {/* {taskArr.map((task, index) => {
          return <Task task={task} removeTask={removeTask}/>
        }
        )} */}
      </TaskList>
    </div>
  );
}

export default App;
