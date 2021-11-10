import React from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {PostType} from "../../../redux/state";


export type MyPostsPropsType = {
    posts: Array<PostType>
    addPost:(postMessage: string) => void
}

export const MyPosts = (props: MyPostsPropsType) => {
    let newPostElementRef = React.createRef<HTMLTextAreaElement>()
    let postsElements = props.posts.map(p => <Post message={p.message} likeCount={p.likesCount}/>)
    const addPost = () => {
        if (newPostElementRef.current) {
            props.addPost(newPostElementRef.current.value)
            newPostElementRef.current.value = ''
        }
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElementRef}></textarea>
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