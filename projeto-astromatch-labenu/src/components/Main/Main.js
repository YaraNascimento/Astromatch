import React, {useState} from 'react'
import AppBar from '../AppBar/AppBar';
import MatchListPage from '../MatchListPage/MatchListPage';
import styled from 'styled-components';
import ChooseProfilePage from '../ChooseProfilePage/ChooseProfilePage';

const MainContainer = styled.div`
margin: 32px;
border: 1px solid black;
border-radius: 3px;
width: 400px;
height: 600px;
text-align: center;
text-align: center;
margin-left: auto;
margin-right: auto;
display: flex;
flex-direction: column;
border-radius: 10px;
`

function Main() {

  const [selectdPage, setSelectdPage] = useState('choose-profile')

  const renderSelectedPage = () => {
    switch(selectdPage) {
      case "choose-profile":
        return<ChooseProfilePage/>
        case "match-list": 
        return<MatchListPage/>
        default:
          return<ChooseProfilePage/>
    }
  }

  const goToChooseProfilePage = () => {
    setSelectdPage("choose-profile")
  }
  const goToMatchListPage = () => {
    setSelectdPage("match-list")
  }

  return (

    <MainContainer>
    <AppBar 
    goToChooseProfilePage = {goToChooseProfilePage} 
    goToMatchListPage={goToMatchListPage}
    />

    {renderSelectedPage()}
   
    </MainContainer>
  );
}

export default Main;
