type PhotosType = {
    small: null | string
    large: null | string
}

export type ItemsType = {
    name: string
    id: number
    uniqueUrlName: null | string
    photos: PhotosType
    status: null | string
    followed: boolean
}

export type initialStateUsersType = {
    items: Array<ItemsType>
    totalCount: number
    error: null
}


let initialState: initialStateUsersType = {
    items: [],
    totalCount: 1,
    error: null,
}

type ActionsType = ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>

export const usersReducer = (state: initialStateUsersType = initialState, action: ActionsType): initialStateUsersType => {
    switch (action.type) {
        case 'FOLLOW': {
            return {
                ...state,
                items: state.items.map(u => u.id === action.userId ? {...u, followed: true} : u)
            }
        }
        case 'UNFOLLOW' : {
            return {
                ...state,
                items: state.items.map(u => u.id === action.userId ? {...u, followed: false} : u)
            }
        }
        case 'SET-USERS': {
            return {...state, items: [...state.items, ...action.users]}
        }
        default:
            return state
    }
}

export const followAC = (userId: number) => {
    return {type: 'FOLLOW', userId} as const
}

export const unfollowAC = (userId: number) => {
    return {type: 'UNFOLLOW', userId} as const
}

export const setUsersAC = (users: Array<ItemsType>) => {
    return {type: 'SET-USERS', users} as const
}