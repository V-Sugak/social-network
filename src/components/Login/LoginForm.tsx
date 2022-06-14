import {useFormik} from "formik";
import s from "./Login.module.css";
import React from "react";

export const LoginForm = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (!values.password) {
                errors.password = 'Required';
            } else if (values.password.length < 4) {
                errors.password = 'Must be 4 characters or more';
            }
            return errors;
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <form onSubmit={formik.handleSubmit} className={s.form}>
            <div className={s.loginData}>
                <input
                    id="email"
                    name="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    placeholder={"Email"}
                />
                {formik.touched.email && formik.errors.email && <div className={s.error}>{formik.errors.email}</div>}
            </div>
            <div className={s.loginData}>
                <input
                    id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    placeholder={"Password"}
                />
                {formik.touched.password && formik.errors.password &&
                <div className={s.error}>{formik.errors.password}</div>}
            </div>
            <div className={s.rememberMe}>
                <input
                    id="rememberMe"
                    name="rememberMe"
                    type="checkbox"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    checked={formik.values.rememberMe}
                />
                <label>Remember me</label>
            </div>
            <button type="submit" className={s.loginButton}>Login</button>
        </form>
    )
}

//types
type FormikErrorType = {
    email?: string
    password?: string
}