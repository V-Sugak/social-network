import React from "react";
import {addPostAC, PostType} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {RootStateType} from "../../../redux/redux-store";

const mapStateToProps = (state: RootStateType): mapStateToPropsType => {
    return {
        posts: state.profilePage.posts
    }
}

export const MyPostsContainer = connect(mapStateToProps, {
    addPost: addPostAC,
})(MyPosts);

//types
type mapStateToPropsType = {
    posts: Array<PostType>
}
type mapDispatchToPropsType = {
    addPost: (value: string) => void
}
export type MyPostsPropsType = mapStateToPropsType & mapDispatchToPropsType;