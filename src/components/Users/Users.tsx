import React, {MouseEvent} from "react";
import {UsersPropsType} from "./UsersContainer";
import s from './users.module.css'
import axios from "axios";
import userPhoto from '../../assets/images/user.png'

export class Users extends React.Component<UsersPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUser(response.data.items);
            this.props.setTotalUserCount(response.data.totalCount)
        })
    }

    onPageChanged = (currentPage:number) => {
        this.props.setCurrentPage(currentPage);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUser(response.data.items)
        })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize);
        let pages = [];

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        return <div>
            <div>
                {pages.map(n => {
                    let onClickHandler = (e:MouseEvent<HTMLSpanElement>) => {this.onPageChanged(n)}
                    return <span onClick={onClickHandler} className={this.props.currentPage === n ? s.userPage : ''}>{n} </span>
                })}
            </div>
            {
                this.props.items.map(u => {
                    const onClickHandler = () => {
                        u.followed ? this.props.unfollow(u.id) : this.props.follow(u.id);
                    }
                    return <div key={u.id}>
                    <span>
                        <div><img src={u.photos.small !== null ? u.photos.small : userPhoto}
                                  className={s.photoUser}/></div>
                        <div><button onClick={onClickHandler}> {u.followed ? 'FOLLOW' : 'UNFOLLOW'}</button></div>
                    </span>
                        <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </span>
                    </span>
                    </div>
                })
            }
        </div>
    }
}