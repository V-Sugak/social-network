import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {addPost, RootStateType, updateNewPostText} from './redux/state';
import App from "./App";
import {BrowserRouter} from "react-router-dom";

export let rerenderEntireTree = (state:RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updateNewPost={updateNewPostText}/>
        </BrowserRouter>,
        document.getElementById('root'));
}
