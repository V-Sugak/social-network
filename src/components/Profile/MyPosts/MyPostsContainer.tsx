import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {StoreContext} from "../../../StoreContext";


export type MyPostsContainerPropsType = {}

export const MyPostsContainer = (props: MyPostsContainerPropsType) => {
    return (<StoreContext.Consumer>
        {(store) => {
            let state = store.getState()
            const addPost = () => {
                store.dispatch(addPostActionCreator())
            }
            const onPostChange = (text: string) => store.dispatch(updateNewPostTextActionCreator(text))
            return <MyPosts newPostText={state.profilePage.newPostText}
                            posts={state.profilePage.posts}
                            updateNewPostText={onPostChange}
                            addPost={addPost}/>
        }}
    </StoreContext.Consumer>)
}