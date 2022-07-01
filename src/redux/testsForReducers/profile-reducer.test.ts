import {
    addPostAC,
    StateProfileType,
    profileReducer,
    setUserProfileAC,
    UserProfileType, setUserStatusAC
} from "../profile-reducer";

let startState: StateProfileType;
beforeEach(() => {
    startState = {
        posts: [
            {id: 1, message: "Hi, how are you", likesCount: 15},
            {id: 2, message: "It's my first post", likesCount: 30}
        ],
        profile: null,
        status: "",
    }
})

test("new post should be added", () => {
    let endState = profileReducer(startState, addPostAC("Hello"));

    expect(startState.posts.length).toBe(2);
    expect(endState.posts.length).toBe(3);
    expect(endState.posts[2].message).toBe('Hello');
    expect(endState.posts[2].likesCount).toBe(0);
    expect(endState.posts[2].id).toBeDefined();
})

test("should set profile of user", () => {
    const profileUser: UserProfileType = {
        "aboutMe": "я круто чувак 1001%",
        "contacts": {
            "facebook": "facebook.com",
            "website": "",
            "vk": "vk.com/dimych",
            "twitter": "https://twitter.com/@sdf",
            "instagram": "instagra.com/sds",
            "youtube": "",
            "github": "github.com",
            "mainLink": ""
        },
        "lookingForAJob": true,
        "lookingForAJobDescription": "не ищу, а дурачусь",
        "fullName": "samurai dimych",
        "userId": 2,
        "photos": {
            "small": "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
            "large": "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
        }
    }
    let endState = profileReducer(startState, setUserProfileAC(profileUser));

    expect(startState.profile).toBe(null);
    expect(endState.profile).toEqual(profileUser);
})

test("should set status of user", () => {
    let endState = profileReducer(startState, setUserStatusAC("Hello"));

    expect(startState.status).toBe("");
    expect(endState.status).toEqual("Hello");
})


