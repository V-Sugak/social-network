import React from 'react';
import s from './Post.module.css'

type PostPropsType = {
    message: string
    likeCount: number
}

export const Post: React.FC<PostPropsType> = (props) => {
    return (
        <div className={s.item}>
            <img
                src="https://bigpicture.ru/wp-content/uploads/2019/11/mixedblood00.jpg"
                alt=""/>
            {props.message}
            <div>
                {props.likeCount} like
            </div>
        </div>
    )
}