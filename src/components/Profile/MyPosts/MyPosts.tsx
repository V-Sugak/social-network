import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {PostType, ProfilePageType} from "../../../redux/state";


export type MyPostsPropsType = {
    profilePage: ProfilePageType
    addPost: () => void
    updateNewPostText: (newPostText: string) => void
}

export const MyPosts = (props: MyPostsPropsType) => {
    let postsElements = props.profilePage.posts.map(p => <Post message={p.message} likeCount={p.likesCount}/>)
    const addPost = () => {
        props.addPost()
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => props.updateNewPostText(e.currentTarget.value)


    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea value={props.profilePage.newPostText} onChange={onPostChange}/>
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