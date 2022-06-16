import {PhotosType} from "./users-reducer";
import {ThunkType} from "./redux-store";
import {profileURL} from "../api/api";
import {toggleIsFetchingAC} from "./app-reducer";

let initialState: StateProfileType = {
    posts: [
        {id: 1, message: "Hi, how are you", likesCount: 15},
        {id: 2, message: "It's my first post", likesCount: 30}
    ],
    newPostText: '',
    profile: null,
    status: '',
}

export const profileReducer = (state: StateProfileType = initialState, action: ProfileActionsType): StateProfileType => {
    switch (action.type) {
        case "ADD-POST": {
            let newPost: PostType = {
                id: 5,
                message: action.value,
                likesCount: 0
            };
            if (action.value.trim()) {
                return {
                    ...state,
                    posts: [...state.posts, newPost],
                    newPostText: ''
                };
            }
            return state;
        }
        /*   case "UPDATE-NEW-POST-TEXT":
                return {...state, newPostText: action.newPostText};*/
        case "SET-USER-PROFILE": {
            return {
                ...state,
                profile: action.profile
            }
        }
        case "SET-USER-STATUS": {
            return {...state, status: action.status}
        }
        default:
            return state;
    }
}

//actions
export const addPostAC = (value: string) => {
    return {type: "ADD-POST", value} as const
}
export const setUserProfileAC = (profile: UserProfileType) => {
    return {type: "SET-USER-PROFILE", profile} as const
}
export const updateNewPostTextAC = (text: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newPostText: text
    } as const
}
export const setUserStatusAC = (status: string) => {
    return {type: 'SET-USER-STATUS', status} as const
}


//thunks
export const getUserProfileTC = (userId: string = "21217"): ThunkType => (dispatch) => {
    dispatch(toggleIsFetchingAC(true))
    profileURL.getProfile(userId).then(response => {
        dispatch(toggleIsFetchingAC(false))
        dispatch(setUserProfileAC(response.data))
    })
}
export const getUserStatusTC = (userId: string = "21217"): ThunkType => (dispatch) => {
    dispatch(toggleIsFetchingAC(true))
    profileURL.getStatus(userId).then(res => {
        dispatch(setUserStatusAC(res.data))
        dispatch(toggleIsFetchingAC(false))
    })
}
export const updateUserStatusTC = (status: string): ThunkType => (dispatch) => {
    profileURL.updateStatus(status).then(res => {
        if (res.data.resultCode === 0) {
            dispatch(setUserStatusAC(status))
        }
    })
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
    newPostText: string
    profile: UserProfileType | null
    status: string
}
export type ProfileActionsType =
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof setUserProfileAC>
    | ReturnType<typeof setUserStatusAC>
