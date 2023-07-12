import React from 'react'
import styled from 'styled-components'

function NewTaskForm() {
  return (
    <NewTaskFormDiv>
        <input type="text" />
        <input type="text" />
        <input type="text" />
    </NewTaskFormDiv>
  )
}

// TODO: Need to style inputs inside of NewTaskForm component
const NewTaskFormDiv = styled.div`
    display: flex;
    flex-direction: column;
    .input {
        width: 30px;
    }
`;

export default NewTaskForm;