import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import {Dialogs} from './components/Dialogs/Dialogs';
import {Header} from './components/Header/Header';
import {Music} from './components/Music/Music';
import {Navbar} from './components/Navbar/Navbar';
import {News} from './components/News/News';
import {Profile} from './components/Profile/Profile';
import {Settings} from './components/Settings/Settings';
import {ActionsType, RootStateType} from "./redux/state";


type AppPropsType = {
    state: RootStateType
    dispatch: (action: ActionsType) => void
}

const App = (props: AppPropsType) => {

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar friends={props.state.navbar.friends}/>
            <div className="app-wrapper-content">
                <Route path={"/profile"} render={() =>
                    <Profile profilePage={props.state.profilePage} dispatch={props.dispatch}/>}/>
                <Route path={"/dialogs"}
                       render={() => <Dialogs dialogs={props.state.dialogsPage}
                                              dispatch={props.dispatch}/>}/>
                <Route path={"/music"} render={() => <Music/>}/>
                <Route path={"/news"} render={() => <News/>}/>
                <Route path={"/settings"} render={() => <Settings/>}/>
            </div>
        </div>
    );
}
export default App;

