import React from "react";
import {useFormik} from "formik";
import s from "../../Login/Login.module.css";  // надо сделать свой css

export const PostForm = (props: PostFormPropsType) => {
    const formik = useFormik({
        initialValues: {
            value: '',
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (values.value && values.value.length > 10) {
                errors.value = 'Max length is 10 symbols';
            }
            return errors;
        },
        onSubmit: () => {
            props.onSubmit(formik.values.value)
            formik.resetForm()
        },
    });
    return <form onSubmit={formik.handleSubmit}>
        <div>
           <textarea
               {...formik.getFieldProps('value')}
           />
        </div>
        <div>
            <button type="submit">{props.buttonName}</button>
            {formik.touched.value && formik.errors.value && <div className={s.error}>{formik.errors.value}</div>}
        </div>
    </form>
}

//types
type PostFormPropsType = {
    buttonName: string
    onSubmit: (value: string) => void
}
type FormikErrorType = {
    value?: string
}