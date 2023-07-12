import React from 'react'
import styled from 'styled-components'

function Task({task, removeTask}) {
  return (
    <TaskCard>
        <h1>{task.taskTitle}</h1>
        <p>{task.taskDesc}</p>
        <p>{task.taskDate}</p>
        <button onClick={ () => removeTask(task.taskId)}>Delete</button>
    </TaskCard>
  )
}

const TaskCard = styled.li`
  border-radius: 10px;
  display: inline-block;
  width: 100%;
  text-align: left;
  padding-left: 20px;
  box-sizing: border-box;
  border: 1px solid rgba(0,0,0,.5)
`

export default Task