import React, {ChangeEvent, useState} from "react";
import s from "./ProfileInfo.module.css"
import {UserProfileType} from "../../../redux/profile-reducer";
import {Preloader} from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/user.png";
import {ProfileStatusWithHooks} from "./ProfileStatus/ProfileStatusWithHooks";
import {ProfileData} from "./ProfileData/ProfileData";
import {ProfileDataForm} from "./ProfileData/ProfileDataForm";

export const ProfileInfo = (props: ProfileInfoPropsType) => {
    const [editMode, setEditMode] = useState<boolean>(false)

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
                        <ProfileStatusWithHooks isOwner={props.isOwner} updateUserStatus={props.updateUserStatus} status={props.status}/>
                    </div>
                    <div>
                        {editMode
                            ? <ProfileDataForm/>
                            : <ProfileData profile={props.profile} isOwner={props.isOwner} goToEditMode={setEditMode}/>}
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