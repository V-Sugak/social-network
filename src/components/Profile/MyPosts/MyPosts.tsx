import React from "react";
import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";
import {PostForm} from "../../common/Forms/PostForm";


export const MyPosts = (props: MyPostsPropsType) => {
    let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likeCount={p.likesCount}/>)

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
}