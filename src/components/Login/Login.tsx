import React from "react";
import s from "./Login.module.css";
import {useFormik} from "formik";

const LoginForm = () => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <form onSubmit={formik.handleSubmit} className={s.form}>
            <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                placeholder={"Email Address"}
            />
            <input
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                placeholder={"Password"}
            />

            <label>Remember me</label>
            <input
                id="rememberMe"
                name="rememberMe"
                type="checkbox"
                onChange={formik.handleChange}
                checked={formik.values.rememberMe}
            />

            <button type="submit">Submit</button>
        </form>
    )
}


export const Login = () => {
    return <div className={s.loginContainer}>
        <h1 className={s.loginHeader}>Login</h1>
        <LoginForm/>
    </div>
}

