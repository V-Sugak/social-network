const initialState: UsersStateType = {
    users: [],
    totalCount: 0,
    error: null,
    pageSize: 100,
    currentPage: 1,
    isFetching: false,
}

export const usersReducer = (state: UsersStateType = initialState, action: ActionsType): UsersStateType => {
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
            return {...state, users: action.users}
        }
        case  'SET-CURRENT-PAGE': {
            return {...state, currentPage: action.currentPage}
        }
        case 'SET-TOTAL-USERS-COUNT': {
            return {...state, totalCount: action.totalCount}
        }
        case 'TOGGLE IS FETCHING': {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state
    }
}

//actions
export const followAC = (userId: number) => {
    return {type: 'FOLLOW', userId} as const
}
export const unfollowAC = (userId: number) => {
    return {type: 'UNFOLLOW', userId} as const
}
export const setUsersAC = (users: Array<UserType>) => {
    return {type: 'SET-USERS', users} as const
}
export const setCurrentPageAC = (currentPage: number) => {
    return {type: 'SET-CURRENT-PAGE', currentPage} as const
}
export const setTotalUsersCountAC = (totalCount: number) => {
    return {type: 'SET-TOTAL-USERS-COUNT', totalCount} as const
}
export const toggleIsFetchingAC = (isFetching: boolean) => {
    return {type: 'TOGGLE IS FETCHING', isFetching} as const
}

//types
type ActionsType =
    | ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalUsersCountAC>
    | ReturnType<typeof toggleIsFetchingAC>

type PhotosType = {
    small: null | string
    large: null | string
}
export type UserType = {
    id: number
    name: string
    status: null | string
    photos: PhotosType
    followed: boolean
}
export type UsersStateType = {
    users: Array<UserType>
    totalCount: number
    error: null
    pageSize: number
    currentPage: number
    isFetching: boolean
}