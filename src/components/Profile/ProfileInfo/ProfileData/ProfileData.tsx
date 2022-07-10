import React from "react";
import {Contact} from "./Contact/Contact";
import {ContactsType, UserProfileType} from "../../../../redux/profile-reducer";

export const ProfileData = (props: ProfileDataPropsType) => {
    return <div>
        {props.isOwner && <button onClick={() => props.goToEditMode(true)}>Edit data</button>}
        <div>
            <b>About me: </b> {props.profile.aboutMe}
        </div>
        <div>
            <b>Looking for a job: </b> {props.profile.lookingForAJob ? "Yes" : "No"}
        </div>
        {props.profile.lookingForAJob && <div>
            <b>My professional skills: </b> {props.profile.lookingForAJobDescription}
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
}

//types
type ProfileDataPropsType = {
    profile: UserProfileType
    isOwner: boolean
    goToEditMode:(editMode:boolean) => void
}