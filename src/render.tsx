import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {addMessage, addPost, RootStateType, updateNewMessageText, updateNewPostText} from './redux/state';
import App from "./App";
import {BrowserRouter} from "react-router-dom";

export let rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 addPost={addPost}
                 updateNewPostText={updateNewPostText}
                 addMessage={addMessage}
                 updateNewMessageText={updateNewMessageText}
            />
        </BrowserRouter>,
        document.getElementById('root'));
}

