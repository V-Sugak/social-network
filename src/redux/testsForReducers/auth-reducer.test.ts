import {authReducer, AuthStateType, setAuthUserDataAC} from "../auth-reducer";

let startState: AuthStateType

beforeEach(() => {
    startState = {
        id: null,
        login: "",
        email: "",
        isAuth: false,
    }
})


test("data should be changed", () => {
    const id = 6
    const login = "gfygui"
    const email = "gjhgh@mail.ru"
    const isAuth = true
    const endState = authReducer(startState, setAuthUserDataAC(id, login, email, isAuth));

    expect(startState.isAuth).toBeFalsy();
    expect(endState.isAuth).toBeTruthy();
    expect(startState.login).toBe("");
    expect(endState.login).toBe(login);
    expect(startState.email).toBe("");
    expect(endState.email).toBe(email);
    expect(startState.id).toBe(null);
    expect(endState.id).toBe(id);
})