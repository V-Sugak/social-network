import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {UserProfileType, setUserProfileAC} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {usersURL} from "../../api/api";
import {toggleIsFetchingAC} from "../../redux/app-reducer";
import {Preloader} from "../common/Preloader/Preloader";

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '2';
        }
        this.props.toggleIsFetching(true)
        usersURL.setUserProfileInformation(userId).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsersProfile(response.data);
        })
    }

    render() {
        return <div>
            {this.props.isFetching ? <Preloader/> : <Profile profile={this.props.profile}/>}
        </div>
    }

};

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
        isFetching: state.app.isFetching,
    }
};

const WithRouterDataComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
    setUsersProfile: setUserProfileAC,
    toggleIsFetching: toggleIsFetchingAC,
})(WithRouterDataComponent);

//types
type MapStatePropsType = {
    profile: UserProfileType | null
    isFetching: boolean
};
type MapDispatchProps = {
    setUsersProfile: (profile: any) => void
    toggleIsFetching: (isFetching: boolean) => void
};
type PathParamsType = {
    userId: string
};
type ProfileContainerType = MapStatePropsType & MapDispatchProps;
type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerType;
