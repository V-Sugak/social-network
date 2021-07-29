import React from 'react';
import { MyPosts } from './MyPosts/MyPosts';
import s from './Profile.module.css'

type ProfileTypeProps = {

}

export const Profile = (props: ProfileTypeProps) => {
    return (
        <div>
            <div>  
                <img src="https://futureofworking.com/wp-content/uploads/2015/06/advantages-and-disadvantages-of-social-networking.png" />
            </div>
            <div>ava+ dicription</div>
            <MyPosts />
        </div>
    )
}