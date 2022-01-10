import React from 'react';
import s from './ProfileInfo.module.css'
import {ProfileType} from "../../../redux/profile-reducer";
import {Preloader} from "../../common/Preloader/Preloader";

type ProfileInfoPropsType = {
    profile: ProfileType | null
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img
                    src="https://futureofworking.com/wp-content/uploads/2015/06/advantages-and-disadvantages-of-social-networking.png"/>
            </div>
            <div className={s.descriptionBlock}>
                <div className={s.photo}>
                    <img src={props.profile.photos.large}/>
                </div>
                <div>
                    <h2>{props.profile.fullName}</h2>
                    <div>
                        <b>Aboute me: </b> {props.profile.aboutMe}
                    </div>
                    <div>
                        <b>Looking for a job: </b>
                        <input type={'checkbox'} checked={props.profile.lookingForAJob}/>
                    </div>
                </div>
            </div>
        </div>
    )
}