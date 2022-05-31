import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {setAuthUserDataAC} from "../../redux/auth-reducer";
import {authURL} from "../../api/api";

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
       authURL.me().then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data;
                this.props.setAuthUserData(id, login, email)
            } // Обработать ошибку!!!! Этот запрос должен быть не здесь. В App?
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

export default connect(mapStateToProps, {setAuthUserData: setAuthUserDataAC})(HeaderContainer);

//types
type mapStatePropsType = {
    isAuth: boolean
    login: string
};
type mapDispatchPropsType = {
    setAuthUserData: (id: number, login: string, email: string) => void;
};
type HeaderContainerPropsType = mapStatePropsType & mapDispatchPropsType;