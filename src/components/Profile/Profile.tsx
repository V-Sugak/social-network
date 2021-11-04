import React from 'react';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {PostType} from "../../redux/state";

export type ProfilePropsType = {
    posts: Array<PostType>
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>
    )
}