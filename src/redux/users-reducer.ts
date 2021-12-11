export type UserType = {
    id: string
    followed: boolean
    fullName: string
    status: string
    location: { city: string, country: string }
    photoUrl: string
}

export type initialStateUsersType = {
    users: Array<UserType>
}


let initialState: initialStateUsersType = {
    users: []
}

type ActionsType = ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>

export const usersReducer = (state: initialStateUsersType = initialState, action: ActionsType): initialStateUsersType => {
    switch (action.type) {
        case 'FOLLOW': {
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)
            }
        }
        case 'UNFOLLOW' : {
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)
            }
        }
        case 'SET-USERS': {
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state
    }
}

export const followAC = (userId: string) => {
    return {type: 'FOLLOW', userId} as const
}

export const unfollowAC = (userId: string) => {
    return {type: 'UNFOLLOW', userId} as const
}

export const setUsersAC = (users: Array<UserType>) => {
    return {type: 'SET-USERS', users} as const
}