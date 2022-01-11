import React from 'react';
import {Profile} from './Profile';
import axios from "axios";
import {connect} from 'react-redux';
import {ProfileType, setUsersProfile} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";

type MapStatePropsType = {
    profile: ProfileType | null
};

type MapDispatchProps = {
    setUsersProfile: (profile: any) => void
};

type PathParamsType = {
    userId: string | undefined   //number???
};

type ProfileContainerType = MapStatePropsType & MapDispatchProps;
type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerType;


class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        debugger
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '2';
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
            this.props.setUsersProfile(response.data);
        })
    }

    render() {
        return <div>
            <Profile profile={this.props.profile}/>
        </div>
    }

};

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile
    }
};

const WithRouterDataComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUsersProfile})(WithRouterDataComponent);