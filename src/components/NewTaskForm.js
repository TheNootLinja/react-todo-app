import React from 'react'
import styled from 'styled-components'

function NewTaskForm() {
  return (
    <NewTaskFormDiv>
        <h2>New Task</h2>
        <div className="input-container">
          <label htmlFor="title">Task</label>
          <input id="title" type="text" />
        </div>
        <div className="input-container">
          <label htmlFor="description">Description</label>
          <textarea id="description" name="description" type="text" rows="4" cols="50" />
        </div>
        <div className="input-container">
          <label htmlFor="date">Date</label>
          <input id="date" type="date" />
        </div>
        <button>Save Task</button>
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