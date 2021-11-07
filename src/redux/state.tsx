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
}

export type PostType = {
    id: number
    message: string
    likesCount: number
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
    dialogs: DialogsType
    posts: Array<PostType>
    navbar: FriendsType
}


export let state: RootStateType = {
    dialogs: {
        dialogsItem: [
            {id: "1", name: "Victoria"},
            {id: "2", name: "Diana"},
            {id: "3", name: "Irina"}
        ],
        messages: [
            {id: 1, message: "Hi"},
            {id: 2, message: "How are you?"},
            {id: 3, message: "Yo"}
        ]
    },
    posts: [
        {id: 1, message: "Hi, how are you", likesCount: 15},
        {id: 1, message: "It's my first post", likesCount: 30}
    ],
    navbar: {
        friends: [
            {id: 1, name: 'Irina', avatar: 'https://img.joinfo.com/i/2018/04/5ad83d406a33d.jpg'},
            {id: 2, name: 'Diana', avatar: 'https://kor.ill.in.ua/m/610x385/2254601.jpg'},
            {id: 3, name: 'Max', avatar: 'https://i.pinimg.com/originals/0e/41/52/0e4152973ef78326aca365659e8d97a8.png'}
        ]
    }

}
