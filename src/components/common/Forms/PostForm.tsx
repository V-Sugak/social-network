import React, {ChangeEvent, KeyboardEvent} from "react";
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
        onSubmit: values => {
            props.onButtonClick(formik.values.value)
          //  alert(JSON.stringify(values, null, 2));
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
}  //обработчики будут в onSubmit !!!

//types
type PostFormPropsType = {
    value: string
    buttonName: string
    // onChangeHandler: (e: ChangeEvent<HTMLTextAreaElement>) => void
    onButtonClick: (value: string) => void
}