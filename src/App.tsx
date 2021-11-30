import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import {Header} from './components/Header/Header';
import {Music} from './components/Music/Music';
import {Navbar} from './components/Navbar/Navbar';
import {News} from './components/News/News';
import {Profile} from './components/Profile/Profile';
import {Settings} from './components/Settings/Settings';
import {StoreType} from "./redux/store";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";


type AppPropsType = {
    store: StoreType
}

const App = (props: AppPropsType) => {

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar store={props.store}/>
            <div className="app-wrapper-content">
                <Route path={"/profile"} render={() => <Profile store={props.store}/>}/>
                <Route path={"/dialogs"} render={() => <DialogsContainer store={props.store}/>}/>
                <Route path={"/music"} render={() => <Music/>}/>
                <Route path={"/news"} render={() => <News/>}/>
                <Route path={"/settings"} render={() => <Settings/>}/>
            </div>
        </div>
    );
}
export default App;

