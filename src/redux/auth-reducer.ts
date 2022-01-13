export  type AuthReducerStateType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean
};

type ActionsType = ReturnType<typeof setAuthUserData>;

const initialState: AuthReducerStateType = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
};

export const authReducer = (state: AuthReducerStateType = initialState, action: ActionsType): AuthReducerStateType => {
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

export const setAuthUserData = (id: number | null, login: string | null, email: string | null) => {
    return {
        type: 'SET-USER-DATA',
        data: {id, login, email}
    } as const
};