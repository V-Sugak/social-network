import {addPostAC, updateNewPostTextAC} from "./profile-reducer";
import {addMessage, updateNewMessageText} from "./dialogs-reducer";

type DialogItemType = {
    id: string
    name: string
}

type MessageType = {
    id: number
    message: string
}

type DialogsType = {
    dialogsItem: Array<DialogItemType>
    messages: Array<MessageType>
    newMessageText: string
}

type PostType = {
    id: number
    message: string
    likesCount: number
}

type ProfilePageType = {
    posts: Array<PostType>,
    newPostText: string
}

type FriendType = {
    id: number
    name: string
    avatar: string
}

type SidebarType = {
    friends: Array<FriendType>
}

type RootStateType = {
    dialogsPage: DialogsType
    profilePage: ProfilePageType
    sidebar: SidebarType
}

type ActionsType =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof addMessage>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof updateNewMessageText>

type StoreType = {
    _state: RootStateType
    _callSubscriber: () => void
    getState: () => RootStateType

    subscribe: (callback: () => void) => void

    dispatch: (action: ActionsType) => void
}
/*

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
        sidebar: {
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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber();
    }
}
*/












