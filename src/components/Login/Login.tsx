import React, {ComponentType} from "react";
import s from "./Login.module.css";
import {LoginForm} from "./LoginForm";
import {AppStateType, ThunkType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {loginTC} from "../../redux/auth-reducer";
import {compose} from "redux";
import {Redirect} from "react-router-dom";

const Login = (props: LoginPropsType) => {
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return <div className={s.loginContainer}>
        <h1 className={s.loginHeader}>Login</h1>
        <LoginForm onSubmit={props.login}/>
    </div>
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}
export default compose<ComponentType>(connect(mapStateToProps, {login: loginTC}))(Login)

//types
type mapStateToPropsType = {
    isAuth: boolean
}
type mapDispatchToPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => ThunkType
}
type LoginPropsType = mapStateToPropsType & mapDispatchToPropsType