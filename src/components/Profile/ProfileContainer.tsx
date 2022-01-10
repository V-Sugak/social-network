import React from 'react';
import {Profile} from './Profile';
import axios from "axios";
import {connect} from 'react-redux';
import {ProfileType, setUsersProfile} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";

type MapStatePropsType = {
    profile: ProfileType | null
}

type MapDispatchProps = {
    setUsersProfile: (profile: any) => void
}

type ProfileContainerType = MapStatePropsType & MapDispatchProps

class ProfileContainer extends React.Component<ProfileContainerType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setUsersProfile(response.data);
        })
    }

    render() {
        return <div>
            <Profile profile={this.props.profile}/>
        </div>
    }

}

const mapStateToProps = (state: AppStateType) => {
    return {
        profile: state.profilePage.profile
    }
}

// export const ProfileContainer = connect(mapStateToProps, {setUsersProfile})(ProfileAPIComponent)

export default connect(mapStateToProps, {setUsersProfile})(ProfileContainer)