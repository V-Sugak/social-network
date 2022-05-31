import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    followAC,
    UserType,
    setCurrentPageAC,
    setTotalUsersCountAC,
    unfollowAC, setUsersAC
} from "../../redux/users-reducer";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {usersURL} from "../../api/api";
import {toggleIsFetchingAC} from "../../redux/app-reducer";

export class UsersContainer extends React.Component<UsersContainerPropsType> {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        usersURL.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount)
            this.props.toggleIsFetching(false)
        })
    }

    onPageChanged = (currentPage: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(currentPage);
        usersURL.getUsers(currentPage, this.props.pageSize).then(data => {
            this.props.setUsers(data.items)
            this.props.toggleIsFetching(false)
        })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                totalCount={this.props.totalCount}
                currentPage={this.props.currentPage}
                pageSize={this.props.pageSize}
                users={this.props.users}
                onPageChanged={this.onPageChanged}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
            />
        </>
    }
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.app.isFetching,
    }
}

export default connect(mapStateToProps,
    {
        follow: followAC,
        unfollow: unfollowAC,
        setUsers: setUsersAC,
        setCurrentPage: setCurrentPageAC,
        setTotalUsersCount: setTotalUsersCountAC,
        toggleIsFetching: toggleIsFetchingAC,
    })(UsersContainer)

//types
type mapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
}
type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}
export type UsersContainerPropsType = mapStateToPropsType & mapDispatchToPropsType;


