import {addPost, profileReducer, updateNewPostText} from "./profile-reducer";

export type PostType = {
    id: number
    message: string
    likesCount: number
}

type startStateType = {
    posts: Array<PostType>
    newPostText: string
}

let startState: startStateType;

beforeEach(() => {
    startState = {
        posts: [
            {id: 1, message: "Hi, how are you", likesCount: 15},
            {id: 2, message: "It's my first post", likesCount: 30}
        ],
        newPostText: 'YES'
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


