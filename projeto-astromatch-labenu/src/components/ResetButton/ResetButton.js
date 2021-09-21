import axios from 'axios';
import React from 'react'
import styled from 'styled-components';

const ResetButtonContainer = styled.div`
text-align: center;
text-align: center;

`

function ResetButton() {
  const onClickReset=()=>{
axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/yara-lovelace/clear').then(response =>{
  console.log(response);
})
  }
  return (
    <ResetButtonContainer>
      <button onClick={onClickReset}>Resetar curtidas e matches</button>
    </ResetButtonContainer>
  );
}

export default ResetButton