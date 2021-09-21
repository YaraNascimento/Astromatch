
import React from 'react'
import styled from 'styled-components';

const ButtonContainer = styled.div`
display: flex;
justify-content: space-around;
border-radius: 10px;
border-radius: 10px 20px 30px 40px;
padding:10px;
` 

function ChooseButton(props) {
  
  return (
    <ButtonContainer>
     <button onClick={props.onClickNo}>❌</button>
     <button onClick={props.onClickYes}>💚</button>
    </ButtonContainer>
  );
}

export default  ChooseButton