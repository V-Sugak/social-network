import React from 'react';
import { MyPosts, PostTypeProps } from './MyPosts/MyPosts';
import s from './Profile.module.css'
import { ProfileInfo } from './ProfileInfo/ProfileInfo';

export type ProfileTypeProps = {
    posts: Array<PostTypeProps>
}



export const Profile = (props: ProfileTypeProps) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.posts} />
        </div>
    )
}