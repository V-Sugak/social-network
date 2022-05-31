import React from "react";
import {Route} from "react-router-dom";
import "./App.css";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {NavbarContainer} from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = () => {

    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <NavbarContainer/>
            <div className="app-wrapper-content">
                <Route path={"/profile/:userId?"} render={() => <ProfileContainer/>}/>
                <Route path={"/dialogs"} render={() => <DialogsContainer/>}/>
                <Route path={"/music"} render={() => <Music/>}/>
                <Route path={"/news"} render={() => <News/>}/>
                <Route path={"/settings"} render={() => <Settings/>}/>
                <Route path={"/users"} render={() => <UsersContainer/>}/>
            </div>
        </div>
    );
} //- в URL profile даем название URI параметру
export default App;

