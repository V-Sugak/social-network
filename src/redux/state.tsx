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

export type StoreType = {
    _state: RootStateType
    _callSubscriber: () => void
    getState: () => RootStateType
    addPost: () => void
    addMessage: () => void
    updateNewPostText: (newPostText: string) => void
    updateNewMessageText: (newMessageText: string) => void
    subscribe: (callback: () => void) => void
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
            newMessageText: 'It is a wonderful day'
        },
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you", likesCount: 15},
                {id: 1, message: "It's my first post", likesCount: 30}
            ],
            newPostText: 'it-incubator'
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
    addPost() {
        let newPost: PostType = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber();
    },
    addMessage() {
        let newMessage: MessageType = {
            id: 4,
            message: this._state.dialogsPage.newMessageText,
        };
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        this._callSubscriber();
    },
    updateNewPostText(newPostText: string) {
        this._state.profilePage.newPostText = newPostText;
        this._callSubscriber();
    },
    updateNewMessageText(newMessageText: string) {
        this._state.dialogsPage.newMessageText = newMessageText;
        this._callSubscriber();
    },
    subscribe(callback: () => void) {
        this._callSubscriber = callback;
    }
}


//window.store=store;





