import React from "react";
import {UserProfileType} from "../../../../redux/profile-reducer";
import {useFormik} from "formik";
import {ProfileType} from "../../../../api/api";
import s from "./ProfileDataForm.module.css"

export const ProfileDataForm = (props: ProfileDataFormPropsType) => {
    const stringInput = (value: string | null) => {
        if (value) {
            return value
        }
        return ""
    }
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
        /*  validate: (values) => {
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
          },*/
        onSubmit: values => {
            /*   onSubmit(formik.values.email, formik.values.password, formik.values.rememberMe)
               formik.resetForm()*/
            console.log(values)
            props.saveProfile({
                userId: props.profile.userId,
                fullName: formik.values.fullName,
                aboutMe: stringInput(formik.values.aboutMe),
                lookingForAJob: formik.values.lookingForAJob,
                lookingForAJobDescription: stringInput(formik.values.lookingForAJobDescription),
                contacts: {
                    github: stringInput(formik.values.github),
                    vk: stringInput(formik.values.vk),
                    facebook: stringInput(formik.values.facebook),
                    instagram: stringInput(formik.values.instagram),
                    twitter: stringInput(formik.values.twitter),
                    website: stringInput(formik.values.website),
                    youtube: stringInput(formik.values.youtube),
                    mainLink: stringInput(formik.values.mainLink),
                }
            })
            props.goToEditMode(false)
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
                {/* {formik.touched.email && formik.errors.email && <div className={s.error}>{formik.errors.email}</div>}*/}
            </div>
            <div className={s.lookingForAJob}>
                <b>Looking for a job: </b> <input type="checkbox"
                                                  checked={formik.values.lookingForAJob}
                                                  {...formik.getFieldProps("lookingForAJob")}/>
            </div>
            <div className={s.lookingForAJobDescription}>
                <b>My professional skills: </b>
                <div>
                    <textarea {...formik.getFieldProps("lookingForAJobDescription")}/>
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
        <div className={s.btn}>
            <button type="submit" onClick={() => props.goToEditMode(true)}>Save data</button>
        </div>

    </form>
}
type ProfileDataFormPropsType = {
    profile: UserProfileType
    goToEditMode: (editMode: boolean) => void
    saveProfile: (profile: ProfileType) => void
}