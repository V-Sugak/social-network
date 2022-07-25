import React from "react";
import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";
import {PostForm} from "../../common/Forms/PostForm";
import userPhoto from "../../../assets/images/user.png";


export const MyPosts = React.memo((props: MyPostsPropsType) => {
    let smallPhoto = "";
    if (props.profile) {
        smallPhoto = props.profile.photos.small !== null ? props.profile.photos.small : userPhoto
    }

    let postsElements = props.posts.map(p => <Post key={p.id} smallPhoto={smallPhoto} message={p.message}
                                                   likeCount={p.likesCount}/>)

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <PostForm buttonName={"Add post"} onSubmit={props.addPost}/>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
})