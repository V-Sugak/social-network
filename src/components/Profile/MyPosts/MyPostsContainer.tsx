import React from 'react';
import {StoreType} from "../../../redux/store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";


export type MyPostsContainerPropsType = {
    store: StoreType
}

export const MyPostsContainer = (props: MyPostsContainerPropsType) => {
    let state = props.store.getState()
    const addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }
    const onPostChange = (text: string) => props.store.dispatch(updateNewPostTextActionCreator(text))

    return <MyPosts newPostText={state.profilePage.newPostText}
                    posts={state.profilePage.posts}
                    updateNewPostText={onPostChange}
                    addPost={addPost}/>
}