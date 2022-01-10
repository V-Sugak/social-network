export type PostType = {
    id: number
    message: string
    likesCount: number
}
type ContactsType = {
    facebook: string
    website: null | string
    vk: null | string
    twitter: null | string
    instagram: null | string
    youtube: null | string,
    github: null | string
    mainLink: null | string
}
type PhotosType = {
    small: string
    large: string
}
export type ProfileType = {
    aboutMe: string
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: PhotosType
}
export type InitialStateProfileType = {
    posts: Array<PostType>
    newPostText: string
    profile: ProfileType | null
}

let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you", likesCount: 15},
        {id: 2, message: "It's my first post", likesCount: 30}
    ],
    newPostText: '',
    profile: null
}

type ActionsType =
    ReturnType<typeof addPost>
    | ReturnType<typeof updateNewPostText>
    | ReturnType<typeof setUsersProfile>

export const profileReducer = (state: InitialStateProfileType = initialState, action: ActionsType): InitialStateProfileType => {
    switch (action.type) {
        case "ADD-POST": {
            let newPost: PostType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            if (state.newPostText.trim()) {
                return {
                    ...state,
                    posts: [...state.posts, newPost],
                    newPostText: ''
                };
            }
            return state;
        }
        case "UPDATE-NEW-POST-TEXT":
            return {...state, newPostText: action.newPostText};
        case "SET-USERS-PROFILE": {
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state;
    }
}
export const addPost = () => {
    return {type: "ADD-POST"} as const
}

export const setUsersProfile = (profile: ProfileType) => {
    return {type: "SET-USERS-PROFILE", profile} as const
}

export const updateNewPostText = (text: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newPostText: text
    } as const
}
