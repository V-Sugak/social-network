import React, {ComponentType} from "react";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {
    UserType, setCurrentPageAC, getUsersTC, followTC, unfollowTC
} from "../../redux/users-reducer";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {compose} from "redux";
import {getCurrentPage, getIsDisabled, getPageSize, getTotalCount, getUsers} from "../../redux/users-selectors";

export class UsersContainer extends React.Component<UsersContainerPropsType> {
    componentDidMount() {
        const {currentPage, pageSize} = this.props
        this.props.getUsers(currentPage, pageSize)
    }

    onPageChanged = (currentPage: number) => {
        const {pageSize} = this.props
        this.props.setCurrentPage(currentPage);
        this.props.getUsers(currentPage, pageSize)
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
                isDisabled={this.props.isDisabled}
            />
        </>
    }
};

const mapStateToProps = (state: RootStateType): mapStateToPropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalCount: getTotalCount(state),
        currentPage: getCurrentPage(state),
        isFetching: state.app.isFetching,
        isDisabled: getIsDisabled(state),
    }
};

export default compose<ComponentType>(connect(mapStateToProps, {
    follow: followTC,
    unfollow: unfollowTC,
    setCurrentPage: setCurrentPageAC,
    getUsers: getUsersTC,
}))(UsersContainer);

//types
type mapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
    isDisabled: Array<number>
}
type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setCurrentPage: (currentPage: number) => void
    getUsers: (page: number, pageSize: number) => void
}
export type UsersContainerPropsType = mapStateToPropsType & mapDispatchToPropsType;


