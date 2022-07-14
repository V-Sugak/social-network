import React from "react";
import {Contact} from "./Contact/Contact";
import {ContactsType, UserProfileType} from "../../../../redux/profile-reducer";
import s from "../ProfileInfo.module.css";
import {ProfileStatusWithHooks} from "../ProfileStatus/ProfileStatusWithHooks";

export const ProfileData = (props: ProfileDataPropsType) => {
    return <div>
        <div className={s.mainBlock}>
            <span className={s.name}>{props.profile.fullName}</span>
            <ProfileStatusWithHooks isOwner={props.isOwner} updateUserStatus={props.updateUserStatus}
                                    status={props.status}/>
        </div>
        <div className={s.informationBlock}>
            {props.isOwner && <button onClick={() => props.goToEditMode(true)}>Edit profile</button>}
            <div>
                <b>About me: </b> {props.profile.aboutMe}
            </div>
            <div>
                <b>Looking for a job: </b> {props.profile.lookingForAJob ? "Yes" : "No"}
            </div>
            {props.profile.lookingForAJob && <div>
                <b>Description my professional skills: </b> {props.profile.lookingForAJobDescription}
            </div>}
            <div>
                <b>Contacts: </b> {
                Object.keys(props.profile.contacts).map(key => {
                    return <Contact key={key} title={key}
                                    value={props.profile.contacts[key as keyof ContactsType]
                                        ? props.profile.contacts[key as keyof ContactsType] as string
                                        : "-"}/>
                })
            }
            </div>
        </div>
    </div>
}

//types
type ProfileDataPropsType = {
    profile: UserProfileType
    isOwner: boolean
    goToEditMode: (editMode: boolean) => void
    status: string
    updateUserStatus: (status: string) => void
    editMode: boolean
}