import React from "react";
import s from "./Post.module.css"

export const Post: React.FC<PostPropsType> = (props) => {
    return (
        <div className={s.item}>
            <img src={props.smallPhoto}/>
            {props.message}
            <div>
                {props.likeCount} like
            </div>
        </div>
    )
}

//types
type PostPropsType = {
    message: string
    likeCount: number
    smallPhoto: string
}