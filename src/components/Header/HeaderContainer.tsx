import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {setAuthUserDataTC} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        this.props.setAuthUserData()
    };

    render() {
        return <Header {...this.props}/>;
    };
};


const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
};

export default connect(mapStateToProps, {setAuthUserData: setAuthUserDataTC})(HeaderContainer);

//types
type mapStatePropsType = {
    isAuth: boolean
    login: string
};
type mapDispatchPropsType = {
    setAuthUserData: () => void;
};
type HeaderContainerPropsType = mapStatePropsType & mapDispatchPropsType;