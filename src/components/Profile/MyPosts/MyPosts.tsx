import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {ActionsType, PostType, ProfilePageType,} from "../../../redux/store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";


export type MyPostsPropsType = {
  //  profilePage: ProfilePageType
    posts: Array<PostType>
    newPostText: string
    updateNewPostText: (text: string) => void
    addPost: () => void
}

export const MyPosts = (props: MyPostsPropsType) => {
    let postsElements = props.posts.map(p => <Post message={p.message} likeCount={p.likesCount}/>)
    const onAddPost = () => props.addPost()
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => props.updateNewPostText(e.currentTarget.value)

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea value={props.newPostText} onChange={onPostChange}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}