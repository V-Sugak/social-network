import React from "react";
import {addPostAC, PostType, updateNewPostTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts
    }
}

export const MyPostsContainer = connect(mapStateToProps, {
    updateNewPostText: updateNewPostTextAC,
    addPost: addPostAC,
})(MyPosts);

//types
type mapStateToPropsType = {
    newPostText: string
    posts: Array<PostType>
}
type mapDispatchToPropsType = {
    updateNewPostText: (text: string) => void
    addPost: (value: string) => void
}
export type MyPostsPropsType = mapStateToPropsType & mapDispatchToPropsType;