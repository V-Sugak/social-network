const ADD_POST = "ADD-POST";
const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

export type DialogItemType = {
    id: string
    name: string
}

export type MessageType = {
    id: number
    message: string
}

export type DialogsType = {
    dialogsItem: Array<DialogItemType>
    messages: Array<MessageType>
    newMessageText: string
}

export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type ProfilePageType = {
    posts: Array<PostType>,
    newPostText: string
}

export type FriendType = {
    id: number
    name: string
    avatar: string
}

export type FriendsType = {
    friends: Array<FriendType>
}

export type RootStateType = {
    dialogsPage: DialogsType
    profilePage: ProfilePageType
    navbar: FriendsType
}

export type ActionsType =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof addMessageActionCreator>
    | ReturnType<typeof updateNewPostTextActionCreator>
    | ReturnType<typeof updateNewMessageTextActionCreator>

export type StoreType = {
    _state: RootStateType
    _callSubscriber: () => void
    getState: () => RootStateType

    subscribe: (callback: () => void) => void

    dispatch: (action: ActionsType) => void
}

export let store: StoreType = {
    _state: {
        dialogsPage: {
            dialogsItem: [
                {id: "1", name: "Victoria"},
                {id: "2", name: "Diana"},
                {id: "3", name: "Irina"}
            ],
            messages: [
                {id: 1, message: "Hi"},
                {id: 2, message: "How are you?"},
                {id: 3, message: "Yo"}
            ],
            newMessageText: ''
        },
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you", likesCount: 15},
                {id: 1, message: "It's my first post", likesCount: 30}
            ],
            newPostText: ''
        },
        navbar: {
            friends: [
                {id: 1, name: 'Irina', avatar: 'https://img.joinfo.com/i/2018/04/5ad83d406a33d.jpg'},
                {id: 2, name: 'Diana', avatar: 'https://kor.ill.in.ua/m/610x385/2254601.jpg'},
                {
                    id: 3,
                    name: 'Max',
                    avatar: 'https://i.pinimg.com/originals/0e/41/52/0e4152973ef78326aca365659e8d97a8.png'
                }
            ]
        }
    },
    _callSubscriber() {
        alert('state changed')
    },

    getState() {
        return this._state
    },

    subscribe(callback) {
        this._callSubscriber = callback;
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost: PostType = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber();
        } else if (action.type === 'ADD-MESSAGE') {
            let newMessage: MessageType = {
                id: 4,
                message: this._state.dialogsPage.newMessageText,
            };
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber();
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newPostText;
            this._callSubscriber();
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageText = action.newMessageText;
            this._callSubscriber();
        }
    }
}


export const addPostActionCreator = () => {
    return {type: ADD_POST} as const
}

export const updateNewPostTextActionCreator = (text: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newPostText: text
    } as const
}

export const addMessageActionCreator = () => {
    return {type: ADD_MESSAGE} as const
}

export const updateNewMessageTextActionCreator = (text: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMessageText: text
    } as const
}








