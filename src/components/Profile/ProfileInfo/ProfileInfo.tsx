import React from 'react';
import s from './ProfileInfo.module.css'

type ProfileInfoTypeProps = {

}

export const ProfileInfo = (props: ProfileInfoTypeProps) => {
    return (
        <div>
            <div>
                <img src="https://futureofworking.com/wp-content/uploads/2015/06/advantages-and-disadvantages-of-social-networking.png" />
            </div>
            <div className={s.discriptionBlock} >ava+ dicription</div>
        </div>
    )
}