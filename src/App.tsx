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
import {RootStateType} from "./redux/state";


type AppPropsType = {
    state: RootStateType
    addPost: () => void
    updateNewPostText: (newPostText: string) => void
    addMessage: () => void
    updateNewMessageText: (newMessageText: string) => void
}

const App = (props: AppPropsType) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar friends={props.state.navbar.friends}/>
            <div className="app-wrapper-content">
                <Route path={"/profile"} render={() =>
                    <Profile profilePage={props.state.profilePage} updateNewPost={props.updateNewPostText}
                             addPost={props.addPost}/>}/>
                <Route path={"/dialogs"}
                       render={() => <Dialogs dialogs={props.state.dialogsPage}
                                              updateNewMessageText={props.updateNewMessageText}
                                              addMessage={props.addMessage}/>}/>
                <Route path={"/music"} render={() => <Music/>}/>
                <Route path={"/news"} render={() => <News/>}/>
                <Route path={"/settings"} render={() => <Settings/>}/>
            </div>
        </div>
    );
}
export default App;

