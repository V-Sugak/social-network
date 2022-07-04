import {ThunkType} from "./redux-store";
import {setAuthUserDataTC} from "./auth-reducer";

const initialState: AppStateType = {
    isFetching: false,                    // isLoading - крутилка
    networkError: "",
    initializedSuccess: false,
}

export const appReducer = (state: AppStateType = initialState, action: AppActionsType): AppStateType => {
    switch (action.type) {
        case "APP/TOGGLE-IS-FETCHING": {
            return {...state, isFetching: action.isFetching}
        }
        case "APP/SET-NETWORK-ERROR": {
            return {...state, networkError: action.error}
        }
        case "APP/SET-INITIALIZED-SUCCESS": {
            return {...state, initializedSuccess: true}
        }
        default:
            return state
    }
}

//actions
export const toggleIsFetchingAC = (isFetching: boolean) => {
    return {type: "APP/TOGGLE-IS-FETCHING", isFetching} as const
}
export const setNetworkErrorAC = (error: string) => {
    return {type: "APP/SET-NETWORK-ERROR", error} as const
}
export const setInitializedSuccessAC = () => {
    return {type: "APP/SET-INITIALIZED-SUCCESS"} as const
}

//thunks
export const initializedAppTC = (): ThunkType => (dispatch) => {
    const promise = dispatch(setAuthUserDataTC())
    Promise.all([promise]).then(() => {
        dispatch(setInitializedSuccessAC())
    })
}

//types
export type AppStateType = {
    isFetching: boolean
    networkError: string
    initializedSuccess: boolean
}
export type AppActionsType =
    | ReturnType<typeof toggleIsFetchingAC>
    | ReturnType<typeof setNetworkErrorAC>
    | ReturnType<typeof setInitializedSuccessAC>