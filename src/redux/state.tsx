import {rerenderEntireTree} from "../render";

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


export let state: RootStateType = {
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
        ]
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
            {id: 3, name: 'Max', avatar: 'https://i.pinimg.com/originals/0e/41/52/0e4152973ef78326aca365659e8d97a8.png'}
        ]
    }
}

export const addPost = () => {
    let newPost: PostType = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export const updateNewPostText = (newPostText: string) => {
    state.profilePage.newPostText = newPostText;
    rerenderEntireTree(state);
}


