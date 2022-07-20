import {useFormik} from "formik";
import s from "./Login.module.css";
import style from "./LoginForm.module.css";
import React from "react";
import {ThunkType} from "../../redux/redux-store";

export const LoginForm = ({onSubmit, networkError, captchaURL}: LoginFormPropsType) => {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            rememberMe: false,
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = "Required";
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = "Invalid email address";
            }
            if (!values.password) {
                errors.password = "Required";
            } else if (values.password.length < 4) {
                errors.password = "Must be 4 characters or more";
            }
            return errors;
        },
        onSubmit: values => {
            onSubmit(formik.values.email, formik.values.password, formik.values.rememberMe)
            formik.resetForm()
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} className={s.form}>
            <div className={s.loginData}>
                <input
                    {...formik.getFieldProps("email")}
                    placeholder={"Email"}
                />
                {formik.touched.email && formik.errors.email && <div className={s.error}>{formik.errors.email}</div>}
            </div>
            <div className={s.loginData}>
                <input
                    type="password"
                    {...formik.getFieldProps("password")}
                    placeholder={"Password"}
                />
                {formik.touched.password && formik.errors.password &&
                <div className={s.error}>{formik.errors.password}</div>}
            </div>
            <div className={s.rememberMe}>
                <input
                    type="checkbox"
                    checked={formik.values.rememberMe}
                    {...formik.getFieldProps("rememberMe")}
                />
                <label>Remember me</label>
            </div>
            <div>
                {captchaURL && <img src={captchaURL} className={style.captchaImage}/>}
            </div>
            <button type="submit" className={s.loginButton}>Login</button>
            <div className={s.error}>
                {networkError}
            </div>
        </form>
    )
}

//types
type FormikErrorType = {
    email?: string
    password?: string
}
type LoginFormPropsType = {
    onSubmit: (email: string, password: string, rememberMe: boolean) => ThunkType
    networkError: string
    captchaURL: string | null
}