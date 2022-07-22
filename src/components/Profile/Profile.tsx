import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {UserProfileType} from "../../redux/profile-reducer";
import {ProfileType} from "../../api/api";
import {Redirect} from "react-router-dom";

export const Profile = (props: ProfilePropsType) => {
    if (!props.isAuth) {
        return <Redirect to={"/login"}/>
    }
    return (
        <div>
            <ProfileInfo
                isOwner={props.isOwner}
                status={props.status}
                profile={props.profile}
                updateUserStatus={props.updateUserStatus}
                savePhoto={props.savePhoto}
                saveProfile={props.saveProfile}
                networkError={props.networkError}
                changeProfileEditMode={props.changeProfileEditMode}
                profileEditMode={props.profileEditMode}
            />
            <MyPostsContainer/>
        </div>
    )
}

//types
export type ProfilePropsType = {
    profile: UserProfileType | null
    status: string
    updateUserStatus: (status: string) => void
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileType, networkError: string) => void
    isOwner: boolean
    networkError: string
    changeProfileEditMode: (profileEditMode: boolean) => void
    profileEditMode: boolean
    isAuth: boolean
}