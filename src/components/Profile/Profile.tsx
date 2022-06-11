import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {UserProfileType} from "../../redux/profile-reducer";

export const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo
                status={props.status}
                profile={props.profile}
                updateUserStatus={props.updateUserStatus}
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
}