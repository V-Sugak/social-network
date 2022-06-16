import React from "react";
import {useFormik} from "formik";

export const PostForm = (props: PostFormPropsType) => {
    const formik = useFormik({
        initialValues: {
            value: '',
        },
        validate: (values) => {
            /*  const errors: FormikErrorType = {};
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
              return errors;*/
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
        </div>
    </form>
}

//types
type PostFormPropsType = {
    buttonName: string
    onSubmit: (value: string) => void
}