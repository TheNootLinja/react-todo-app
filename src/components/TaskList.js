import React, { useLayoutEffect } from 'react'
import Task from './Task.js'
import styled from 'styled-components'

function TaskList({taskArr, removeTask}) {
  return (
    <TaskListUl>
        {taskArr.map((task, index) => {
          return <Task key={task.taskId} task={task} removeTask={removeTask}/>
        }
        )}
    </TaskListUl>
  )
}

const TaskListUl = styled.ul`
    width: 95%;
    max-width: 1000px;
    margin: auto;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 5px;
`

export default TaskList