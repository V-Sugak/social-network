import {addPost, InitialStateProfileType, profileReducer, setUsersProfile, updateNewPostText} from "./profile-reducer";

export type PostType = {
    id: number
    message: string
    likesCount: number
}

let startState: InitialStateProfileType;

beforeEach(() => {
    startState = {
        posts: [
            {id: 1, message: "Hi, how are you", likesCount: 15},
            {id: 2, message: "It's my first post", likesCount: 30}
        ],
        newPostText: 'YES',
        profile: null,
    }
})

test('should added new post', () => {
    let endState = profileReducer(startState, addPost());

    expect(startState.posts.length).toBe(2);
    expect(endState.posts.length).toBe(3);
    expect(endState.posts[2].message).toBe('YES');
    expect(endState.posts[2].likesCount).toBe(0);
    expect(endState.posts[2].id).toBeDefined();
})

test('should updated new post text', () => {
    let endState = profileReducer(startState, updateNewPostText('It updated'));

    expect(startState.newPostText).toBe('YES');
    expect(endState.newPostText).toBe('It updated');
})

test('should set profile of user', () => {
    const profileUser = {
        "aboutMe": "я круто чувак 1001%",
        "contacts": {
            "facebook": "facebook.com",
            "website": null,
            "vk": "vk.com/dimych",
            "twitter": "https://twitter.com/@sdf",
            "instagram": "instagra.com/sds",
            "youtube": null,
            "github": "github.com",
            "mainLink": null
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
    let endState = profileReducer(startState, setUsersProfile(profileUser));

    expect(startState.profile).toBe(null);
    expect(endState.profile).toEqual(profileUser);
})


