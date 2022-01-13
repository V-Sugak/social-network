import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {AuthReducerStateType, setAuthUserData} from "../../redux/auth-reducer";

type mapStatePropsType = {
    isAuth: boolean
    login: string | null
};
type mapDispatchPropsType = {
    setAuthUserData: (id: number | null, login: string | null, email: string | null) => void;
};
type HeaderContainerPropsType = mapStatePropsType & mapDispatchPropsType;

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0//auth/me',
            {withCredentials: true}).then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data;
                this.props.setAuthUserData(id, login, email)
            }
        })
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

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);