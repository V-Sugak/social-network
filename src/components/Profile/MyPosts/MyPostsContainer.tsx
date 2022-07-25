import React from "react";
import {addPostAC, PostType, UserProfileType} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {RootStateType} from "../../../redux/redux-store";

const mapStateToProps = (state: RootStateType): mapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        profile: state.profilePage.profile,
    }
}

export const MyPostsContainer = connect(mapStateToProps, {
    addPost: addPostAC,
})(MyPosts);

//types
type mapStateToPropsType = {
    posts: Array<PostType>
    profile: UserProfileType | null
}
type mapDispatchToPropsType = {
    addPost: (value: string) => void
}
export type MyPostsPropsType = mapStateToPropsType & mapDispatchToPropsType;