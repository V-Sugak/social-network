import {AppRootActionsType, RootDispatch, ThunkType} from "./redux-store";
import {setAuthUserDataACType, setAuthUserDataTC, SomeReturnType} from "./auth-reducer";
import {ThunkDispatch} from "redux-thunk/src/types";

const initialState: AppStateType = {
    isFetching: false,                    // isLoading - крутилка
    networkError: "",
    initializedSuccess: false,
}

export const appReducer = (state: AppStateType = initialState, action: AppActionsType): AppStateType => {
    switch (action.type) {
        case "TOGGLE-IS-FETCHING": {
            return {...state, isFetching: action.isFetching}
        }
        case "SET-NETWORK-ERROR": {
            return {...state, networkError: action.error}
        }
        case "SET-INITIALIZED-SUCCESS": {
            return {...state, initializedSuccess: true}
        }
        default:
            return state
    }
}

//actions
export const toggleIsFetchingAC = (isFetching: boolean) => {
    return {type: "TOGGLE-IS-FETCHING", isFetching} as const
}
export const setNetworkErrorAC = (error: string) => {
    return {type: "SET-NETWORK-ERROR", error} as const
}
export const setInitializedSuccessAC = () => {
    return {type: "SET-INITIALIZED-SUCCESS"} as const
}

//thunks
export const initializedAppTC = () => (dispatch:RootDispatch) => {
  const promise =  dispatch(setAuthUserDataTC())
    promise.then(() => {
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