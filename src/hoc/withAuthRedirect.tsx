import React, {ComponentType} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {RootStateType} from "../redux/redux-store";

const mapStateToPropsForRedirect = (state: RootStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function withAuthRedirect<T>(Component: ComponentType<T>) {
    const RedirectComponent = (props: MapStateToPropsType) => {
        let {isAuth, ...restProps} = props
        if (!isAuth) {
            return <Redirect to={"/login"}/>
        }
        return <Component {...restProps as T}/>
    }
    let WrapperComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)
    return WrapperComponent
}

//types
type MapStateToPropsType = { isAuth: boolean }