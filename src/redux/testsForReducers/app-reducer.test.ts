import {appReducer, AppStateType, setInitializedSuccessAC, setNetworkErrorAC, toggleIsFetchingAC} from "../app-reducer";

let startState: AppStateType

beforeEach(() => {
    startState = {
        isFetching: false,
        networkError: "",
        initializedSuccess: false,
    }
})

test("isFetching should be true", () => {
    const endState = appReducer(startState, toggleIsFetchingAC(true));

    expect(startState.isFetching).toBeFalsy();
    expect(endState.isFetching).toBeTruthy();
})

test("networkError should be length > 0", () => {
    const endState = appReducer(startState, setNetworkErrorAC("Hello"));

    expect(startState.networkError.length).toBe(0);
    expect(endState.networkError.length).toBe(5);
})

test("initializedSuccess should be true", () => {
    const endState = appReducer(startState, setInitializedSuccessAC());

    expect(startState.initializedSuccess).toBeFalsy();
    expect(endState.initializedSuccess).toBeTruthy();
})