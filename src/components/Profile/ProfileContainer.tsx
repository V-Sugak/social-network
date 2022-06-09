import React, {ComponentType} from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {UserProfileType, setUserProfileInformationTC} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {Preloader} from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        this.props.setUsersProfile(userId)
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

export default compose<ComponentType>(
    connect(mapStateToProps, {setUsersProfile: setUserProfileInformationTC}),
    withRouter,
)(ProfileContainer);

//types
type MapStatePropsType = {
    profile: UserProfileType | null
    isFetching: boolean
};
type MapDispatchProps = {
    setUsersProfile: (userId: string) => void
};
type PathParamsType = {
    userId: string
};
type ProfileContainerType = MapStatePropsType & MapDispatchProps;
type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerType;
