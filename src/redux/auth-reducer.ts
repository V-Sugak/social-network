const initialState: AuthStateType = {
    id: null,
    login: "",
    email: "",
    isAuth: false,
};

export const authReducer = (state: AuthStateType = initialState, action: ActionsType): AuthStateType => {
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

//types
export  type AuthStateType = {
    id: number | null
    login: string
    email: string
    isAuth: boolean
};
type ActionsType = ReturnType<typeof setAuthUserDataAC>;