import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    toggleIsFetchingAC,
    unfollowAC,
    usersReducer
} from "./users-reducer";

type PhotosType = {
    small: null | string
    large: null | string
}

export type ItemsType = {
    name: string
    id: number
    uniqueUrlName: null | string
    photos: PhotosType
    status: null | string
    followed: boolean
}

export type initialStateUsersType = {
    items: Array<ItemsType>
    totalCount: number
    error: null
    pageSize: number
    currentPage: number
    isFetching: boolean
}


let startState: initialStateUsersType;

beforeEach(() => {
    startState = {
        items: [
            {
                "name": "PoshelykDavid",
                "id": 21625,
                "uniqueUrlName": null,
                "photos": {
                    "small": null,
                    "large": null
                },
                "status": null,
                "followed": false
            },
            {
                "name": "David2001",
                "id": 21624,
                "uniqueUrlName": null,
                "photos": {
                    "small": null,
                    "large": null
                },
                "status": null,
                "followed": true
            }],
        totalCount: 0,
        error: null,
        pageSize: 100,
        currentPage: 1,
        isFetching: false,
    }
})

test('should change follow to unfollow', () => {
    const endState = usersReducer(startState, followAC(21625));

    expect(startState.items[0].followed).toBeFalsy();
    expect(endState.items[0].followed).toBeTruthy();
})

test('should change unfollow to follow', () => {
    const endState = usersReducer(startState, unfollowAC(21624));

    expect(startState.items[1].followed).toBeTruthy();
    expect(endState.items[1].followed).toBeFalsy();
})

test('set users', () => {
    startState.items = [];
    const initialItemState = [{
        "name": "stivv",
        "id": 21619,
        "uniqueUrlName": null,
        "photos": {
            "small": null,
            "large": null
        },
        "status": null,
        "followed": false
    },
        {
            "name": "nastassia",
            "id": 21618,
            "uniqueUrlName": null,
            "photos": {
                "small": null,
                "large": null
            },
            "status": null,
            "followed": false
        },]

    const endState = usersReducer(startState, setUsersAC(initialItemState));

    expect(startState.items.length).toBe(0);
    expect(endState.items.length).toBe(2);
    expect(endState.items[0].id).toBe(21619);
    expect(endState.items[1].id).toBe(21618);
})

test('set current page', () => {
    const endState = usersReducer(startState, setCurrentPageAC(5));

    expect(startState.currentPage).toBe(1);
    expect(endState.currentPage).toBe(5);
})

test('set total user count', () => {
    const endState = usersReducer(startState, setTotalUsersCountAC(5));

    expect(startState.totalCount).toBe(0);
    expect(endState.totalCount).toBe(5);
})

test('should toggle is fetching', () => {
    const endState = usersReducer(startState, toggleIsFetchingAC(true));

    expect(startState.isFetching).toBeFalsy();
    expect(endState.isFetching).toBeTruthy();
})
