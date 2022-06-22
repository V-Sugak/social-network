import {ThunkType} from "./redux-store";
import {authURL} from "../api/api";

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
    authURL.me().then(response => {
        if (response.data.resultCode === 0) {
            let {id, login, email} = response.data.data;
            dispatch(setAuthUserDataAC(id, login, email, true))
        }
    })
}
export const loginTC = (email: string, password: string, rememberMe: boolean): ThunkType => (dispatch) => {
    authURL.login({email, password, rememberMe}).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserDataTC())
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
export type AuthActionsType = ReturnType<typeof setAuthUserDataAC>;