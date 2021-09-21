import React from 'react'
import styled from 'styled-components';


const AppBarContainer = styled.div`
display: flex;
justify-content: space-around;
border-bottom: 1px solid lightgray;
align-items: center;
padding: 0 8px;
border-radius: 10px;
`


function AppBar(props) {
  return (
    <AppBarContainer>
     <button onClick={props.goToChooseProfilePage}>Escolher</button>
     <p>ASTROMATCH</p>
     <button onClick={props.goToMatchListPage}>Lista de matches</button>
    </AppBarContainer>
  );
}

export default AppBar;
