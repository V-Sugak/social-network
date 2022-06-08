import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {UserProfileType, setUserProfileInformationTC} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {Preloader} from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

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
const WithRedirectProfileContainer = withAuthRedirect<PropsType>(ProfileContainer)
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
        isFetching: state.app.isFetching,
    }
};

const WithRouterDataComponent = withRouter(WithRedirectProfileContainer);

export default connect(mapStateToProps, {
    setUsersProfile: setUserProfileInformationTC,
})(WithRouterDataComponent);

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
