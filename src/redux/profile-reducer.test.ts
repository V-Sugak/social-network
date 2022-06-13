import {
    addPostAC,
    StateProfileType,
    profileReducer,
    setUserProfileAC,
    updateNewPostTextAC,
    UserProfileType
} from "./profile-reducer";

export type PostType = {
    id: number
    message: string
    likesCount: number
}

let startState: StateProfileType;

beforeEach(() => {
    startState = {
        posts: [
            {id: 1, message: "Hi, how are you", likesCount: 15},
            {id: 2, message: "It's my first post", likesCount: 30}
        ],
        newPostText: 'YES',
        profile: null,
        status:''
    }
})

test('should added new post', () => {
    let endState = profileReducer(startState, addPostAC());

    expect(startState.posts.length).toBe(2);
    expect(endState.posts.length).toBe(3);
    expect(endState.posts[2].message).toBe('YES');
    expect(endState.posts[2].likesCount).toBe(0);
    expect(endState.posts[2].id).toBeDefined();
})

test('should updated new post text', () => {
    let endState = profileReducer(startState, updateNewPostTextAC('It updated'));

    expect(startState.newPostText).toBe('YES');
    expect(endState.newPostText).toBe('It updated');
})

test('should set profile of user', () => {
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


