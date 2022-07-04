import {
    followAC, UsersStateType, setTotalUsersCountAC,
    setUsersAC,
    usersReducer, UserType, isDisabledAC
} from "../users-reducer";

let startState: UsersStateType;

beforeEach(() => {
    startState = {
        users: [
            {
                "name": "PoshelykDavid",
                "id": 21625,
                "photos": {
                    "small": "",
                    "large": ""
                },
                "status": "",
                "followed": false
            },
            {
                "name": "David2001",
                "id": 21624,
                "photos": {
                    "small": "",
                    "large": ""
                },
                "status": "",
                "followed": true
            }],
        totalCount: 0,
        error: null,
        pageSize: 100,
        currentPage: 1,
        isDisabled: []
    }
})

test("should be changed: follow-unfollow", () => {
    const endState = usersReducer(startState, followAC(21625));
    expect(startState.users[0].followed).toBeFalsy();
    expect(endState.users[0].followed).toBeTruthy();
    const endState1 = usersReducer(endState, followAC(21625));
    expect(endState1.users[0].followed).toBeFalsy();
})

test("user should be set", () => {
    startState.users = [];
    const initialItemState: Array<UserType> = [{
        "name": "stivv",
        "id": 21619,
        "photos": {
            "small": "",
            "large": ""
        },
        "status": "",
        "followed": false
    },
        {
            "name": "nastassia",
            "id": 21618,
            "photos": {
                "small": "",
                "large": ""
            },
            "status": "",
            "followed": false
        },]

    const endState = usersReducer(startState, setUsersAC(initialItemState));

    expect(startState.users.length).toBe(0);
    expect(endState.users.length).toBe(2);
    expect(endState.users[0].id).toBe(21619);
    expect(endState.users[1].id).toBe(21618);
})

test("currentPage should be set", () => {
    const endState = usersReducer(startState, setTotalUsersCountAC(5));

    expect(startState.currentPage).toBe(1);
    expect(endState.currentPage).toBe(5);
})

test('totalUserCount should be set', () => {
    const endState = usersReducer(startState, setTotalUsersCountAC(5));

    expect(startState.totalCount).toBe(0);
    expect(endState.totalCount).toBe(5);
})

test("Array of isDisabled should be length > 0, then === 0", () => {
    const userId = 25
    //Array of isDisabled should be length > 0
    const endState = usersReducer(startState, isDisabledAC(userId, true))
    expect(startState.isDisabled.length).toBe(0)
    expect(endState.isDisabled.length).toBe(1)
    //Array of isDisabled should be length === 0
    const endState1 = usersReducer(endState, isDisabledAC(userId, false))
    expect(endState1.isDisabled.length).toBe(0)
})
