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
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTTXOVu5r0oeNXoCscarp4c7N1zZrYtK04HA&usqp=CAU"
                alt=""/>
            <span> {props.message} </span>
            <div>
                <span> {props.likeCount} like</span>
            </div>
        </div>
    )
}