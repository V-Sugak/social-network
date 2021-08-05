import React from 'react';
import s from './MyPosts.module.css'
import { Post } from './Post/Post';

export type PostTypeProps = {
    id: number
    message: string
    likeCount: number
}

export type MyPostsTypeProps = {
    posts: Array<PostTypeProps>
}

export const MyPosts = (props: MyPostsTypeProps) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likeCount={p.likeCount} />)

    return (
        <div className={s.postsBlock} >
            My posts
            <div>
                <div>
                    <textarea ></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div >
            <div className={s.posts} >
                {postsElements}
            </div>
        </div>
    )
}