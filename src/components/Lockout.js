import React from 'react';
import styled from 'styled-components';

function Lockout({children}) {
  return (
    <LockoutDiv>{children}</LockoutDiv>
  )
}

const LockoutDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(200,200,200,.75);
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default Lockout