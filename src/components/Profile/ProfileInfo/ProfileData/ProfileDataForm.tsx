import React from "react";
import {UserProfileType} from "../../../../redux/profile-reducer";
import {useFormik} from "formik";
import {ProfileType} from "../../../../api/api";
import s from "./ProfileDataForm.module.css"

export const ProfileDataForm = (props: ProfileDataFormPropsType) => {
    const formik = useFormik({
        initialValues: {
            fullName: props.profile.fullName,
            aboutMe: props.profile.aboutMe,
            lookingForAJob: props.profile.lookingForAJob,
            lookingForAJobDescription: props.profile.lookingForAJobDescription,
            github: props.profile.contacts.github,
            vk: props.profile.contacts.vk,
            facebook: props.profile.contacts.facebook,
            instagram: props.profile.contacts.instagram,
            twitter: props.profile.contacts.twitter,
            website: props.profile.contacts.website,
            youtube: props.profile.contacts.youtube,
            mainLink: props.profile.contacts.mainLink,
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.aboutMe) {
                errors.aboutMe = 'Required';
            }
            if (!values.lookingForAJobDescription) {
                errors.lookingForAJobDescription = 'Required';
            }
            /*   if (!values.email) {
                   errors.email = 'Required';
               } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                   errors.email = 'Invalid email address';
               }
               if (!values.password) {
                   errors.password = 'Required';
               } else if (values.password.length < 4) {
                   errors.password = 'Must be 4 characters or more';
               }*/
            return errors;
        },
        onSubmit: values => {
            /*   onSubmit(formik.values.email, formik.values.password, formik.values.rememberMe)
               formik.resetForm()*/
            console.log(values)
            props.saveProfile({
                userId: props.profile.userId,
                fullName: formik.values.fullName,
                aboutMe: formik.values.aboutMe,
                lookingForAJob: formik.values.lookingForAJob,
                lookingForAJobDescription: formik.values.lookingForAJobDescription,
                contacts: {
                    github: formik.values.github,
                    vk: formik.values.vk,
                    facebook: formik.values.facebook,
                    instagram: formik.values.instagram,
                    twitter: formik.values.twitter,
                    website: formik.values.website,
                    youtube: formik.values.youtube,
                    mainLink: formik.values.mainLink,
                }
            }, props.networkError)
        },
    });

    return <form onSubmit={formik.handleSubmit} className={s.form}>
        <div className={s.mainBlock}>
            {/* <span className={s.name}>{props.profile.fullName}</span>*/}
            <div className={s.fullNameData}>
                <b>Full name: </b>
                <input
                    {...formik.getFieldProps("fullName")}
                    placeholder={"fullName"}
                />
                {/* {formik.touched.email && formik.errors.email && <div className={s.error}>{formik.errors.email}</div>}*/}
            </div>

        </div>


        <div className={s.informationBlock}>
            <div className={s.aboutMe}>
                <b>About me: </b>
                <div><textarea {...formik.getFieldProps("aboutMe")}/></div>
                {formik.touched.aboutMe && formik.errors.aboutMe &&
                <div className={s.error}>{formik.errors.aboutMe}</div>}
            </div>
            <div className={s.lookingForAJob}>
                <b>Looking for a job: </b> <input type="checkbox"
                                                  checked={formik.values.lookingForAJob}
                                                  {...formik.getFieldProps("lookingForAJob")}/>
            </div>
            <div className={s.lookingForAJobDescription}>
                <b>Description my professional skills: </b>
                <div>
                    <textarea {...formik.getFieldProps("lookingForAJobDescription")}/>
                    {formik.touched.lookingForAJobDescription && formik.errors.lookingForAJobDescription &&
                    <div className={s.error}>{formik.errors.lookingForAJobDescription}</div>}
                </div>
            </div>
            <div>
                <b>Contacts: </b> {
                Object.keys(props.profile.contacts).map(key => {
                    return <div key={key} className={s.contactBlock}>
                        <div><b>{key}: </b></div>
                        <div><input {...formik.getFieldProps(`${key}`)}/></div>
                    </div>
                })
            }
            </div>
        </div>
        <div className={s.submitBock}>
            <div className={s.error}>
                {props.networkError}
            </div>
            <div className={s.btn}>
                <button type="submit">Save data</button>
            </div>
        </div>


    </form>
}

//types
type ProfileDataFormPropsType = {
    profile: UserProfileType
    saveProfile: (profile: ProfileType, networkError: string) => void
    networkError: string
}
type FormikErrorType = {
    aboutMe?: string
    lookingForAJobDescription?: string
}