const initialState: AppStateType = {
    isFetching: false,                    // isLoading - крутилка
    networkError: ""
}

export const appReducer = (state: AppStateType = initialState, action: AppActionsType): AppStateType => {
    switch (action.type) {
        case "TOGGLE-IS-FETCHING": {
            return {...state, isFetching: action.isFetching}
        }
        case "SET-NETWORK-ERROR": {
            return {...state, networkError: action.error}
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

//types
export type AppStateType = {
    isFetching: boolean
    networkError: string
}
export type AppActionsType =
    | ReturnType<typeof toggleIsFetchingAC>
    | ReturnType<typeof setNetworkErrorAC>