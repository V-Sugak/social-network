import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {StoreType} from "../../redux/store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

export type ProfilePropsType = {
    store: StoreType
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}/>
        </div>
    )
}