import {
    addMessageActionCreator,
    DialogItemType,
    dialogsReducer,
    MessageType,
    updateNewMessageTextActionCreator
} from "./dialogs-reducer";

type  initialStateType = {
    dialogsItem: Array<DialogItemType>
    messages: Array<MessageType>
    newMessageText: string
}

let startState: initialStateType;

beforeEach(() => {
    startState = {
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
        newMessageText: 'Yes'
    }
})

test('should added new message', () => {
    const endState = dialogsReducer(startState, addMessageActionCreator());

    expect(endState.messages.length).toBe(4);
    expect(endState.dialogsItem.length).toBe(3);
    expect(endState.messages[3].message).toBe('Yes');
    expect(endState.messages[2].message).toBe('Yo');
})

test('should updated new message', () => {
    const endState = dialogsReducer(startState, updateNewMessageTextActionCreator('It updated'));

    expect(endState.newMessageText).toBe('It updated');
    expect(startState.newMessageText).toBe('Yes');
})