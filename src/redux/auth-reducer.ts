import {ThunkType} from "./redux-store";
import {authURL} from "../api/api";
import {setNetworkErrorAC} from "./app-reducer";

const initialState: AuthStateType = {
    id: null,
    login: "",
    email: "",
    isAuth: false,
};

export const authReducer = (state: AuthStateType = initialState, action: AuthActionsType): AuthStateType => {
    switch (action.type) {
        case "SET-USER-DATA": {
            return {
                ...state,
                ...action.payload
            }
        }
        default:
            return state;
    }
};

//actions
export const setAuthUserDataAC = (id: number | null, login: string, email: string, isAuth: boolean) => {
    return {
        type: "SET-USER-DATA",
        payload: {id, login, email, isAuth}
    } as const
};

//thunks
export const setAuthUserDataTC = (): ThunkType => (dispatch) => {
    return authURL.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data;
                dispatch(setAuthUserDataAC(id, login, email, true))
            }
        })
}
export type SomeReturnType = ReturnType<typeof setAuthUserDataTC>
export const loginTC = (email: string, password: string, rememberMe: boolean): ThunkType => (dispatch) => {
    authURL.login({email, password, rememberMe})
        .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserDataTC())
                } else {
                    if (response.data.messages.length) {
                        dispatch(setNetworkErrorAC(response.data.messages[0]))
                    } else {
                        dispatch(setNetworkErrorAC("Some error occurred"))
                    }
                }
            }
        )
}
export const logoutTC = (): ThunkType => (dispatch) => {
    authURL.logout()
        .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserDataAC(null, '', '', false))
                }
            }
        )
}

//types
export  type AuthStateType = {
    id: number | null
    login: string
    email: string
    isAuth: boolean
};
export type setAuthUserDataACType = ReturnType<typeof setAuthUserDataAC>
export type AuthActionsType = setAuthUserDataACType