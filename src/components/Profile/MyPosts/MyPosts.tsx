import React from 'react';
import s from './MyPosts.module.css'
import { Post } from './Post/Post';

type MyPostsTypeProps = {

}

export const MyPosts = (props: MyPostsTypeProps) => {
    return (
        <div >
            My posts
            <div>
                <textarea ></textarea>
                <button>Add post</button>
            </div>
            <Post message={"Hi, how are you"} likeCount={15} />
            <Post message={"It's my first post"} likeCount={15} />
        </div>
    )
}