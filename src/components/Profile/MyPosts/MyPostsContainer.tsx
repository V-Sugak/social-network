import React from 'react';
import {addPost, PostType, updateNewPostText} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../../redux/redux-store";

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
            dispatch(updateNewPostText(text))
        },
        addPost: () => {
            dispatch(addPost())
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, {updateNewPostText, addPost,})(MyPosts);

export type MyPostsPropsType = mapStateToPropsType & mapDispatchToProps;