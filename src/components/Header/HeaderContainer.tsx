import React, {ComponentType} from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {RootStateType, ThunkType} from "../../redux/redux-store";
import {logoutTC} from "../../redux/auth-reducer";
import {compose} from "redux";

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    render() {
        return <Header {...this.props}/>;
    }
}

const mapStateToProps = (state: RootStateType): mapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}
export default compose<ComponentType>(connect(mapStateToProps, {
    logout: logoutTC
}))(HeaderContainer)

//types
type mapStatePropsType = {
    isAuth: boolean
    login: string
}
type mapDispatchPropsType = {
    logout: () => ThunkType
}
type HeaderContainerPropsType = mapStatePropsType & mapDispatchPropsType