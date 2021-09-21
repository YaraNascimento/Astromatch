import React from 'react'

import styled from 'styled-components';

const ProfileCardContainer = styled.div`
margin: 16x;
border: 1px solid black;
border-radius: 10px
`

const ProfilFoto = styled.img`
width: 100%;
display: block;
border-radius: 10px;
max-height: 356px;

`
const ProfileInfo = styled.div`
padding: 1px;
border-radius: 10px;

`


function ProfileCard(props) {
const profile = props.profile
  return (
    <ProfileCardContainer>
      <ProfilFoto src={profile.photo} />
      <ProfileInfo>
      <p>{profile.name}, {profile.age}</p>
      <p>{profile.bio}</p>
      </ProfileInfo>
    </ProfileCardContainer>
  );
}

export default  ProfileCard