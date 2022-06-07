const initialState: AppStateType = {
    isFetching: false,                    // isLoading - крутилка
}

export const appReducer = (state: AppStateType = initialState, action: AppActionsType): AppStateType => {
    switch (action.type) {
        case 'TOGGLE IS FETCHING': {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state
    }
}

//actions
export const toggleIsFetchingAC = (isFetching: boolean) => {
    return {type: 'TOGGLE IS FETCHING', isFetching} as const
}

//types
export type AppStateType = { isFetching: boolean }
export type AppActionsType =
    | ReturnType<typeof toggleIsFetchingAC>