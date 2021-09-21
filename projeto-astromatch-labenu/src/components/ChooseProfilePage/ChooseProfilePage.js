import React, { useEffect, useState } from 'react'
import ProfileCard from './ProfileCard';
import ChooseButton from './ChooseButton';
import axios from 'axios';


function ChooseProfilePage() {
    const [profileToChoose, setProfileToChoose] = useState(undefined)


    const getProfileToChoose = () => {
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/yara-lovelace/person').then(response => {
            setProfileToChoose(response.data.profile)
        })
    }

    const chooseProfile = (choise) => {
        const body = {
            choice: choise,
            id: profileToChoose.id
        }

        setProfileToChoose(undefined)
        axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/yara-lovelace/choose-person', body).then(response => {
            console.log(response);
            getProfileToChoose()
        })
    }

    useEffect(() => {
        getProfileToChoose()
    }, []);

    const onClickNo = () => {
        chooseProfile(false)

    }

    const onClickYes = () => {
        chooseProfile(true)
    }


    return (
        <div>
            {profileToChoose ?
               (<>
                    <ProfileCard profile={profileToChoose} />
                    <ChooseButton onClickNo={onClickNo} onClickYes={onClickYes} />
                </>) : <p>Carregando...</p>
            }
        </div>
    );
}
export default ChooseProfilePage;
