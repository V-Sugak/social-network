import React, {ComponentType} from "react";
import s from "./Login.module.css";
import {LoginForm} from "./LoginForm";
import {RootStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {loginTC, setCaptchaURLAC} from "../../redux/auth-reducer";
import {compose} from "redux";
import {Redirect} from "react-router-dom";
import {setNetworkErrorAC} from "../../redux/app-reducer";

const Login = ({isAuth, networkError, setNetworkError, login, captchaURL}: LoginPropsType) => {
    if (isAuth) {
        if (networkError) {
            setNetworkError('')
        }
        return <Redirect to={"/profile"}/>
    }
    return <div className={s.loginContainer}>
        <h1 className={s.loginHeader}>Login</h1>
        <LoginForm isAuth={isAuth}
                   onSubmit={login}
                   networkError={networkError}
                   captchaURL={captchaURL}/>
    </div>
}

const mapStateToProps = (state: RootStateType): mapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        networkError: state.app.networkError,
        captchaURL: state.auth.captchaURL,
    }
}
export default compose<ComponentType>(connect(mapStateToProps, {
    login: loginTC,
    setNetworkError: setNetworkErrorAC,
    setCaptchaURL: setCaptchaURLAC,
}))(Login)

//types
type mapStateToPropsType = {
    isAuth: boolean
    networkError: string
    captchaURL: string
}
type mapDispatchToPropsType = {
    login: (email: string, password: string, rememberMe: boolean, captcha: string | null) => void
    setNetworkError: (error: string) => void
}
type LoginPropsType = mapStateToPropsType & mapDispatchToPropsType