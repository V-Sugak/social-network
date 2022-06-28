import React, {ComponentType} from "react";
import {Route, withRouter} from "react-router-dom";
import "./App.css";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import Dialogs from "./components/Dialogs/DialogsContainer";
import {NavbarContainer} from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {compose} from "redux";
import {connect} from "react-redux"
import {initializedAppTC} from "./redux/app-reducer";
import {RootStateType} from "./redux/redux-store";
import {Preloader} from "./components/common/Preloader/Preloader";

class App extends React.Component<AppPropsType> {
    componentDidMount() {
        this.props.initializedApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <NavbarContainer/>
                <div className="app-wrapper-content">
                    <Route path={"/profile/:userId?"} render={() => <ProfileContainer/>}/>
                    <Route path={"/dialogs"} render={() => <Dialogs/>}/>
                    <Route path={"/music"} render={() => <Music/>}/>
                    <Route path={"/news"} render={() => <News/>}/>
                    <Route path={"/settings"} render={() => <Settings/>}/>
                    <Route path={"/users"} render={() => <UsersContainer/>}/>
                    <Route path={"/login"} render={() => <Login/>}/>
                </div>
            </div>
        );
    }
} //- в URL profile даем название URI параметру

const mapStateToProps = (state: RootStateType): mapStatePropsType => {
    return {
        initialized: state.app.initializedSuccess,
    }
}
export default compose<ComponentType>(withRouter, connect(mapStateToProps, {
    initializedApp: initializedAppTC,
}))(App)
//чтобы Routes нормально работали, надо обернуть компонент в withRouter

//types
type mapDispatchPropsType = {
    initializedApp: () => void
}
type mapStatePropsType = {
    initialized: boolean
}
type  AppPropsType = mapDispatchPropsType & mapStatePropsType