import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import {Dialogs} from './components/Dialogs/Dialogs';
import {Header} from './components/Header/Header';
import {Music} from './components/Music/Music';
import {Navbar} from './components/Navbar/Navbar';
import {News} from './components/News/News';
import {Profile} from './components/Profile/Profile';
import {Settings} from './components/Settings/Settings';
import {addPost, RootStateType, updateNewPostText} from "./redux/state";


type AppPropsType = {
    state: RootStateType
    addPost: () => void
    updateNewPost: (newPostText: string) => void
}

const App = (props: AppPropsType) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar friends={props.state.navbar.friends}/>
            <div className="app-wrapper-content">
                <Route path={"/profile"} render={() =>
                    <Profile profilePage={props.state.profilePage} updateNewPost={updateNewPostText}
                             addPost={props.addPost}/>}/>
                <Route path={"/dialogs"} render={() => <Dialogs dialogs={props.state.dialogsPage}/>}/>
                <Route path={"/music"} render={() => <Music/>}/>
                <Route path={"/news"} render={() => <News/>}/>
                <Route path={"/settings"} render={() => <Settings/>}/>
            </div>
        </div>
    );
}
export default App;

