import React from "react";
import s from "./ProfileInfo.module.css"
import {UserProfileType} from "../../../redux/profile-reducer";
import {Preloader} from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/user.png";
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";
import {ProfileStatusWithHooks} from "./ProfileStatus/ProfileStatusWithHooks";

export const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <div className={s.photo}>
                    <img src={props.profile.photos.large !== null ? props.profile.photos.large : userPhoto}/>
                </div>
                <div>
                    <div className={s.statusBlock}>
                        <span className={s.name}>{props.profile.fullName}</span>
                        <ProfileStatusWithHooks updateUserStatus={props.updateUserStatus} status={props.status}/>
                    </div>
                    <div>
                        <b>About me: </b> {props.profile.aboutMe}
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

//types
type ProfileInfoPropsType = {
    profile: UserProfileType | null
    status: string
    updateUserStatus: (status: string) => void
}