let initialState: StateDialogsType = {
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
}

export const dialogsReducer = (state: StateDialogsType = initialState, action: DialogsActionsType): StateDialogsType => {
    switch (action.type) {
        case "DIALOGS/ADD-MESSAGE": {
            let newMessage: MessageType = {
                id: 4,
                message: action.value,
            };
            return {
                ...state,
                messages: [...state.messages, newMessage],
            };
        }
        default:
            return state;
    }
}

//actions
export const addMessageAC = (value: string) => {
    return {type: "DIALOGS/ADD-MESSAGE", value} as const
}

//types
export type DialogItemType = {
    id: string
    name: string
}
export type MessageType = {
    id: number
    message: string
}
export type StateDialogsType = {
    dialogsItem: Array<DialogItemType>
    messages: Array<MessageType>
}
export type  DialogsActionsType =
    | ReturnType<typeof addMessageAC>

