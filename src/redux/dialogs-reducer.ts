export type DialogItemType = {
    id: string
    name: string
}

export type MessageType = {
    id: number
    message: string
}

export type initialStateDialogsType = typeof initialState

let initialState = {
    dialogsItem: [
        {id: "1", name: "Victoria"},
        {id: "2", name: "Diana"},
        {id: "3", name: "Irina"}
    ] as Array<DialogItemType>,
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Yo"}
    ] as Array<MessageType>,
    newMessageText: ''
}

export const dialogsReducer = (state: initialStateDialogsType = initialState, action: ActionsType): initialStateDialogsType => {

    switch (action.type) {
        case "ADD-MESSAGE": {
            let newMessage: MessageType = {
                id: 4,
                message: state.newMessageText,
            };
            let newState = {
                ...state,
                messages: [...state.messages, newMessage]
            }
            state.newMessageText = '';
            return newState;
        }
        case "UPDATE-NEW-MESSAGE-TEXT": {
            return {
                ...state,
                newMessageText: action.newMessageText
            };
        }
        default:
            return state;
    }
}

type  ActionsType = ReturnType<typeof addMessageActionCreator>
    | ReturnType<typeof updateNewMessageTextActionCreator>

export const addMessageActionCreator = () => {
    return {type: "ADD-MESSAGE"} as const
}

export const updateNewMessageTextActionCreator = (text: string) => {
    return {
        type: "UPDATE-NEW-MESSAGE-TEXT",
        newMessageText: text
    } as const
}
