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
    likeCount: number
}
export type RootStateType = {
    dialogs: DialogsType
    posts: Array<PostType>
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
        {id: 1, message: "Hi, how are you", likeCount: 15},
        {id: 1, message: "It's my first post", likeCount: 30}
    ]
}
