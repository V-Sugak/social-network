import React from "react";
import s from "./Login.module.css";
import {LoginForm} from "./LoginForm";

export const Login = () => {
    return <div className={s.loginContainer}>
        <h1 className={s.loginHeader}>Login</h1>
        <LoginForm/>
    </div>
}

