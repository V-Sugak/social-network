import React from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {PostType} from "../../../redux/state";


export type MyPostsPropsType = {
    posts: Array<PostType>
}

export const MyPosts = (props: MyPostsPropsType) => {
    let newPostElement = React.createRef<HTMLTextAreaElement>()
    let postsElements = props.posts.map(p => <Post message={p.message} likeCount={p.likesCount}/>)
    const addPost = () => {
        if (newPostElement.current) {
            alert(newPostElement.current.value)
        }
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}