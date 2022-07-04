import {PhotosType} from "./users-reducer";
import {ThunkType} from "./redux-store";
import {profileURL} from "../api/api";
import {toggleIsFetchingAC} from "./app-reducer";

let initialState: StateProfileType = {
    posts: [
        {id: 1, message: "Hi, how are you", likesCount: 15},
        {id: 2, message: "It's my first post", likesCount: 30}
    ],
    profile: null,
    status: "",
}

export const profileReducer = (state: StateProfileType = initialState, action: ProfileActionsType): StateProfileType => {
    switch (action.type) {
        case "PROFILE/ADD-POST": {
            let newPost: PostType = {
                id: 5,
                message: action.value,
                likesCount: 0
            };
            if (action.value.trim()) {
                return {
                    ...state,
                    posts: [...state.posts, newPost],
                };
            }
            return state;
        }
        case "PROFILE/SET-USER-PROFILE": {
            return {
                ...state,
                profile: action.profile
            }
        }
        case "PROFILE/SET-USER-STATUS": {
            return {...state, status: action.status}
        }
        default:
            return state;
    }
}

//actions
export const addPostAC = (value: string) => {
    return {type: "PROFILE/ADD-POST", value} as const
}
export const setUserProfileAC = (profile: UserProfileType) => {
    return {type: "PROFILE/SET-USER-PROFILE", profile} as const
}
export const setUserStatusAC = (status: string) => {
    return {type: "PROFILE/SET-USER-STATUS", status} as const
}


//thunks
export const getUserProfileTC = (userId: number): ThunkType => async (dispatch) => {
    dispatch(toggleIsFetchingAC(true))
    let response = await profileURL.getProfile(userId)
    dispatch(toggleIsFetchingAC(false))
    dispatch(setUserProfileAC(response.data))
}
export const getUserStatusTC = (userId: number): ThunkType => async (dispatch) => {
    dispatch(toggleIsFetchingAC(true))
    const response = await profileURL.getStatus(userId)
    dispatch(setUserStatusAC(response.data))
    dispatch(toggleIsFetchingAC(false))
}
export const updateUserStatusTC = (status: string): ThunkType => async (dispatch) => {
    const response = await profileURL.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setUserStatusAC(status))
    }
}

//types
export type PostType = {
    id: number
    message: string
    likesCount: number
}
type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string,
    mainLink: string
}
export type UserProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
    aboutMe: string
}
export type StateProfileType = {
    posts: Array<PostType>
    profile: UserProfileType | null
    status: string
}
export type ProfileActionsType =
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof setUserProfileAC>
    | ReturnType<typeof setUserStatusAC>
