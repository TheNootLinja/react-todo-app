import React, {useState} from 'react'
import styled from 'styled-components'

function NewTaskForm({addTask}) {

  const [taskTitle, setTaskTitle] = useState('');
  const [taskDesc, setTaskDesc] = useState('');
  const [taskDate, setTaskDate] = useState('');

  const handleTitleChange = (e) => {
    setTaskTitle(e.target.value);
  }
  const handleDescChange = (e) => {
    setTaskDesc(e.target.value);
  }
  const handleDateChange = (e) => {
    setTaskDate(e.target.value);
  }

  return (
    <NewTaskFormDiv>
        <h2>New Task</h2>
        <div className="input-container">
          <label htmlFor="title">Task</label>
          <input value={taskTitle} onChange={handleTitleChange} id="title" type="text" />
        </div>
        <div className="input-container">
          <label htmlFor="description">Description</label>
          <textarea value={taskDesc} onChange={handleDescChange} id="description" name="description" type="text" rows="4" cols="50" />
        </div>
        <div className="input-container">
          <label htmlFor="date">Date</label>
          <input value={taskDate} onChange={handleDateChange} id="date" type="date" />
        </div>
        <button onClick={() => addTask(taskTitle, taskDesc, taskDate)}>Save Task</button>
    </NewTaskFormDiv>
  )
}

// TODO: Need to style inputs inside of NewTaskForm component
const NewTaskFormDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: auto;
    margin-bottom: 20px;
    max-width: 500px;
    & > .input-container {
      display: flex;
      flex-direction: column;
      width: 100%;
      label {
        text-align: left;
        margin-left: 20px;
      }
      input {
        width: 90%;
        height: 40px;
        margin: auto;
      }
      textarea {
        width: 90%;
        margin: auto;
      }
    }
    & > h2 {
      margin: 0;
    }
    & > button {
      height: 50px;
      width: 90%;
      margin: auto;
      margin-top: 20px;
    }
`;

export default NewTaskForm;