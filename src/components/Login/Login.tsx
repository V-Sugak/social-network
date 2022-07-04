import React, {ComponentType} from "react";
import s from "./Login.module.css";
import {LoginForm} from "./LoginForm";
import {RootStateType, ThunkType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {loginTC} from "../../redux/auth-reducer";
import {compose} from "redux";
import {Redirect} from "react-router-dom";
import {setNetworkErrorAC} from "../../redux/app-reducer";

const Login = ({isAuth, networkError, setNetworkError, login}: LoginPropsType) => {
    if (isAuth) {
        if (networkError) {
            setNetworkError('')
        }
        return <Redirect to={"/profile"}/>
    }
    return <div className={s.loginContainer}>
        <h1 className={s.loginHeader}>Login</h1>
        <LoginForm onSubmit={login} networkError={networkError}/>
    </div>
}

const mapStateToProps = (state: RootStateType): mapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        networkError: state.app.networkError,
    }
}
export default compose<ComponentType>(connect(mapStateToProps, {
    login: loginTC,
    setNetworkError: setNetworkErrorAC,
}))(Login)

//types
type mapStateToPropsType = {
    isAuth: boolean
    networkError: string
}
type mapDispatchToPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => ThunkType
    setNetworkError: (error: string) => void
}
type LoginPropsType = mapStateToPropsType & mapDispatchToPropsType