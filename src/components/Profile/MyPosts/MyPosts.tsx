import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {ActionsType, PostType, ProfilePageType} from "../../../redux/state";


export type MyPostsPropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionsType) => void
}

export const MyPosts = (props: MyPostsPropsType) => {
    let postsElements = props.profilePage.posts.map(p => <Post message={p.message} likeCount={p.likesCount}/>)
    const addPost = () => {
        props.dispatch({type: "ADD-POST"})
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => props.dispatch({
        type: "UPDATE-NEW-POST-TEXT",
        newPostText: e.currentTarget.value
    })


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