import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import reportWebVitals from './reportWebVitals';

let state = {
    dialogs: {
        dialogsItem: [
            { id: "1", name: "Victoria" },
            { id: "2", name: "Diana" },
            { id: "3", name: "Irina" }],
        messages: [
            { id: 1, message: "Hi" },
            { id: 2, message: "How are you?" },
            { id: 3, message: "Yo" }]
    },
    posts: [
        { id: 1, message: "Hi, how are you", likeCount: 15 },
        { id: 1, message: "It's my first post", likeCount: 30 }
    ]
}

ReactDOM.render(
    <App state={state} />,
    document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
