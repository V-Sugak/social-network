import React, {ChangeEvent} from "react";
import s from "./ProfileInfo.module.css"
import {UserProfileType} from "../../../redux/profile-reducer";
import {Preloader} from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/user.png";
import {ProfileStatusWithHooks} from "./ProfileStatus/ProfileStatusWithHooks";

export const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            props.savePhoto(e.target.files[0])
        }
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <div className={s.photo}>
                    <img src={props.profile.photos.large !== null ? props.profile.photos.large : userPhoto}/>
                    <div>
                        {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
                    </div>
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
    isOwner: boolean
    savePhoto: (file: File) => void
}