import {ActionsType, DialogsType, MessageType, ProfilePageType} from "./store";

const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState: DialogsType = {
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
}

export const dialogsReducer = (state: DialogsType = initialState, action: ActionsType) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage: MessageType = {
                id: 4,
                message: state.newMessageText,
            };
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessageText;
            return state;
        default:
            return state;
    }
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
