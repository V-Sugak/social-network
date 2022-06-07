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
                ...action.data,
                isAuth: true
            }
        }
        default:
            return state;
    }
};

//actions
export const setAuthUserDataAC = (id: number, login: string, email: string) => {
    return {
        type: "SET-USER-DATA",
        data: {id, login, email}
    } as const
};

//thunks
export const setAuthUserDataTC = (): ThunkType => (dispatch) => {
    authURL.me().then(response => {
        if (response.data.resultCode === 0) {
            let {id, login, email} = response.data.data;
            dispatch(setAuthUserDataAC(id, login, email))
        }
    })
}

//types
export  type AuthStateType = {
    id: number | null
    login: string
    email: string
    isAuth: boolean
};
export type AuthActionsType = ReturnType<typeof setAuthUserDataAC>;