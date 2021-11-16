import React from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {PostType, ProfilePageType} from "../../../redux/state";


export type MyPostsPropsType = {
    profilePage: ProfilePageType
    addPost: () => void
    updateNewPostText: (newPostText: string) => void
}

export const MyPosts = (props: MyPostsPropsType) => {
    let newPostElementRef = React.createRef<HTMLTextAreaElement>()
    let postsElements = props.profilePage.posts.map(p => <Post message={p.message} likeCount={p.likesCount}/>)
    const addPost = () => {
        if (newPostElementRef.current) {
            props.addPost()
        }
    }

    const onPostChange = () => {
        if (newPostElementRef.current) {
            props.updateNewPostText(newPostElementRef.current.value)
        }
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElementRef} value={props.profilePage.newPostText} onChange={onPostChange}/>
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