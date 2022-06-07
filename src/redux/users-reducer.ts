import {ThunkType} from "./redux-store";
import {usersURL} from "../api/api";
import {toggleIsFetchingAC} from "./app-reducer";

const initialState: UsersStateType = {
    users: [],
    totalCount: 0,                        //количество всех пользователей(с сервера)
    error: null,
    pageSize: 100,
    currentPage: 1,
    isDisabled: []
}

export const usersReducer = (state: UsersStateType = initialState, action: UsersActionsType): UsersStateType => {
    switch (action.type) {
        case "FOLLOW": {
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)
            }
        }
        case "UNFOLLOW" : {
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)
            }
        }
        case "SET-USERS": {
            return {...state, users: action.users}
        }
        case  "SET-CURRENT-PAGE": {
            return {...state, currentPage: action.currentPage}
        }
        case "SET-TOTAL-USERS-COUNT": {
            return {...state, totalCount: action.totalCount}
        }
        case "IS-DISABLED": {
            return {
                ...state,
                isDisabled: action.isFetching ? [...state.isDisabled, action.userId] : state.isDisabled.filter(id => id !== action.userId)
            }
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
export const isDisabledAC = (userId: number, isFetching: boolean) => {
    return {type: 'IS-DISABLED', userId, isFetching} as const
}

//thunks
export const getUsersTC = (currentPage: number, pageSize: number): ThunkType => (dispatch) => {
    dispatch(toggleIsFetchingAC(true))
    usersURL.getUsers(currentPage, pageSize).then(data => {
        dispatch(setUsersAC(data.data.items))
        dispatch(setTotalUsersCountAC(data.data.totalCount))
        dispatch(toggleIsFetchingAC(false))
    })
}
export const followTC = (userId: number): ThunkType => (dispatch) => {
    dispatch(isDisabledAC(userId, true))
    usersURL.follow(userId).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(followAC(userId))
        }
        dispatch(isDisabledAC(userId, false))
    })
}
export const unfollowTC = (userId: number): ThunkType => (dispatch) => {
    dispatch(isDisabledAC(userId, true))
    usersURL.unfollow(userId).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(unfollowAC(userId))
        }
        dispatch(isDisabledAC(userId, false))
    })
}

//types
export type PhotosType = {
    small: string
    large: string
}
export type UserType = {
    id: number
    name: string
    status: string
    photos: PhotosType
    followed: boolean
}
export type UsersStateType = {
    users: Array<UserType>
    totalCount: number
    error: null
    pageSize: number
    currentPage: number
    isDisabled: Array<number>
}
export type UsersActionsType =
    | ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalUsersCountAC>
    | ReturnType<typeof isDisabledAC>