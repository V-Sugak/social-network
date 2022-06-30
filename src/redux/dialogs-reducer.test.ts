import {
    addMessageAC,
    dialogsReducer, StateDialogsType,
} from "./dialogs-reducer";

let startState: StateDialogsType;

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
    }
})

test("new message should be added", () => {
    const endState = dialogsReducer(startState, addMessageAC("Yes"));

    expect(startState.messages.length).toBe(3);
    expect(endState.messages.length).toBe(4);
    expect(endState.messages[3].message).toBe("Yes");
    expect(endState.messages[3].id).toBeDefined();
})


