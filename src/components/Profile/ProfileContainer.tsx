import React, {ComponentType} from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {UserProfileType, getUserProfileTC, getUserStatusTC, updateUserStatusTC} from "../../redux/profile-reducer";
import {RootStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {Preloader} from "../common/Preloader/Preloader";
import {compose} from "redux";

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = Number(this.props.match.params.userId)
        if (!userId) {
            if (this.props.authorizedUserId) {
                if (!userId) {
                    userId = this.props.authorizedUserId
                }
            } else {
                this.props.history.push('/login')
            }
        }
        this.props.getUsersProfile(userId)
        this.props.getUserStatus(userId)
    }

    render() {
        return <div>
            {this.props.isFetching ? <Preloader/> : <Profile
                status={this.props.status}
                profile={this.props.profile}
                updateUserStatus={this.props.updateUserStatus}
            />}
        </div>
    }
};

const mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
        isFetching: state.app.isFetching,
        status: state.profilePage.status,
        authorizedUserId: state.auth.id,
        isAuth: state.auth.isAuth,
    }
};

export default compose<ComponentType>(
    connect(mapStateToProps, {
        getUsersProfile: getUserProfileTC,
        getUserStatus: getUserStatusTC,
        updateUserStatus: updateUserStatusTC,
    }),
    withRouter,
)(ProfileContainer);

//types
type MapStatePropsType = {
    profile: UserProfileType | null
    isFetching: boolean
    status: string
    authorizedUserId: number | null
    isAuth: boolean
};
type MapDispatchProps = {
    getUsersProfile: (userId: number) => void
    getUserStatus: (userId: number) => void
    updateUserStatus: (status: string) => void
};
type PathParamsType = {
    userId: string
};
type ProfileContainerType = MapStatePropsType & MapDispatchProps;
type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerType;
