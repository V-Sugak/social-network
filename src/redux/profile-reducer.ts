export type PostType = {
    id: number
    message: string
    likesCount: number
}
type ActionsType = ReturnType<typeof addPost> | ReturnType<typeof updateNewPostText>

type InitialStateProfileType = typeof initialState

let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you", likesCount: 15},
        {id: 2, message: "It's my first post", likesCount: 30}
    ],
    newPostText: ''
}


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
        default:
            return state;
    }
}
export const addPost = () => {
    return {type: "ADD-POST"} as const
}

export const updateNewPostText = (text: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newPostText: text
    } as const
}
