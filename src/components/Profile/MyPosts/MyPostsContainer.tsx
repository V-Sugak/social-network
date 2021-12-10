import React from 'react';
import {addPostActionCreator, PostType, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../../redux/redux-store";


/*
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
}*/

type mapStateToPropsType = {
    newPostText: string
    posts: Array<PostType>
}
type mapDispatchToProps = {
    updateNewPostText: (text: string) => void
    addPost: () => void
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToProps => {
    return {
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostTextActionCreator(text))
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export type MyPostsPropsType = mapStateToPropsType & mapDispatchToProps;