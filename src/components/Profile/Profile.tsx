import React from 'react';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ProfilePageType} from "../../redux/state";

export type ProfilePropsType = {
    profilePage: ProfilePageType
    addPost:() => void
    updateNewPost:(newPostText: string) => void
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts addPost={props.addPost} profilePage={props.profilePage} updateNewPostText={props.updateNewPost}/>
        </div>
    )
}