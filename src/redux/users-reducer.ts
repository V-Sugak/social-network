import {RootActionsType, ThunkType} from "./redux-store";
import {ResponseType, usersURL} from "../api/api";
import {toggleIsFetchingAC} from "./app-reducer";
import {Dispatch} from "redux";

const initialState: UsersStateType = {
    users: [],
    totalCount: 0,                        //количество всех пользователей(с сервера)
    error: null,
    pageSize: 10,
    currentPage: 1,
    isDisabled: [],
    portionSize: 10,
}

export const usersReducer = (state: UsersStateType = initialState, action: UsersActionsType): UsersStateType => {
    switch (action.type) {
        case "USERS/FOLLOW-UNFOLLOW": {
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: !u.followed} : u)
            }
        }
        case "USERS/SET-USERS": {
            return {...state, users: action.users}
        }
        case  "USERS/SET-CURRENT-PAGE": {
            return {...state, currentPage: action.currentPage}
        }
        case "USERS/SET-TOTAL-USERS-COUNT": {
            return {...state, totalCount: action.totalCount}
        }
        case "USERS/IS-DISABLED-FOLLOWING-PROGRESS": {
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
    return {type: "USERS/FOLLOW-UNFOLLOW", userId} as const
}
export const setUsersAC = (users: Array<UserType>) => {
    return {type: "USERS/SET-USERS", users} as const
}
export const setCurrentPageAC = (currentPage: number) => {
    return {type: "USERS/SET-CURRENT-PAGE", currentPage} as const
}
export const setTotalUsersCountAC = (totalCount: number) => {
    return {type: "USERS/SET-TOTAL-USERS-COUNT", totalCount} as const
}
export const isDisabledAC = (userId: number, isFetching: boolean) => {
    return {type: "USERS/IS-DISABLED-FOLLOWING-PROGRESS", userId, isFetching} as const
}

//common functions
const followUnfollowFlow =
    async (dispatch: Dispatch<RootActionsType>, userId: number, apiMethod: APIMethodType) => {
        const data = await apiMethod(userId)
        if (data.resultCode === 0) {
            dispatch(followAC(userId))
        }
        dispatch(isDisabledAC(userId, false))
    }

//thunks
export const getUsersTC = (page: number, pageSize: number): ThunkType => async (dispatch) => {
    dispatch(toggleIsFetchingAC(true))
    const data = await usersURL.getUsers(page, pageSize)
    dispatch(setUsersAC(data.data.items))
    dispatch(setTotalUsersCountAC(data.data.totalCount))
    dispatch(toggleIsFetchingAC(false))
}
export const followTC = (userId: number): ThunkType => (dispatch) => {
    followUnfollowFlow(dispatch, userId, usersURL.follow.bind(userId))
}
export const unfollowTC = (userId: number): ThunkType => async (dispatch) => {
    followUnfollowFlow(dispatch, userId, usersURL.unfollow.bind(userId))
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
    portionSize: number
}
type APIMethodType = (userId: number) => Promise<ResponseType>
export type UsersActionsType =
    | ReturnType<typeof followAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalUsersCountAC>
    | ReturnType<typeof isDisabledAC>