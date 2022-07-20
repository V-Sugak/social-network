import {ThunkType} from "./redux-store";
import {authURL, securityURL} from "../api/api";
import {setNetworkErrorAC} from "./app-reducer";

const initialState: AuthStateType = {
    id: null,
    login: "",
    email: "",
    isAuth: false,
    captchaURL: null,  // if null, then captcha is not required
};

export const authReducer = (state: AuthStateType = initialState, action: AuthActionsType): AuthStateType => {
    switch (action.type) {
        case "AUTH/SET-USER-DATA": {
            return {
                ...state,
                ...action.payload
            }
        }
        case "APP/SET-CAPTCHA-URL": {
            return {...state, captchaURL: action.captchaURL}
        }
        default:
            return state;
    }
};

//actions
export const setAuthUserDataAC = (id: number | null, login: string, email: string, isAuth: boolean) => {
    return {
        type: "AUTH/SET-USER-DATA",
        payload: {id, login, email, isAuth}
    } as const
}
export const setCaptchaURLAC = (captchaURL: string) => {
    return {type: "APP/SET-CAPTCHA-URL", captchaURL} as const
}

//thunks
export const setAuthUserDataTC = (): ThunkType => async (dispatch) => {
    const response = await authURL.me()
    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data;
        dispatch(setAuthUserDataAC(id, login, email, true))
    }
}
export const loginTC = (email: string, password: string, rememberMe: boolean): ThunkType => async (dispatch) => {
    const response = await authURL.login({email, password, rememberMe})
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserDataTC())
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaURLTC())
        }
        if (response.data.messages.length) {
            dispatch(setNetworkErrorAC(response.data.messages[0]))
        } else {
            dispatch(setNetworkErrorAC("Some error occurred"))
        }
    }
}
export const logoutTC = (): ThunkType => async (dispatch) => {
    const response = await authURL.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserDataAC(null, '', '', false))
    }
}
export const getCaptchaURLTC = (): ThunkType => (dispatch) => {
    securityURL.getCaptchaURL().then(response => {
        dispatch(setCaptchaURLAC(response.data.url))
    })
}

//types
export  type AuthStateType = {
    id: number | null
    login: string
    email: string
    isAuth: boolean
    captchaURL: string | null
};
export type setAuthUserDataACType =
    | ReturnType<typeof setAuthUserDataAC>
    | ReturnType<typeof setCaptchaURLAC>
export type AuthActionsType = setAuthUserDataACType