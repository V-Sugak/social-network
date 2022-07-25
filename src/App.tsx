import React, {ComponentType} from "react";
import {HashRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import "./App.css";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import {NavbarContainer} from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {compose} from "redux";
import {connect, Provider} from "react-redux"
import {initializedAppTC} from "./redux/app-reducer";
import {RootStateType, store} from "./redux/redux-store";
import {Preloader} from "./components/common/Preloader/Preloader";

const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"))
const Dialogs = React.lazy(() => import("./components/Dialogs/DialogsContainer"))

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
                    <React.Suspense fallback={<Preloader/>}>
                        <Switch>
                            <Route exact path={"/"} render={() => <Redirect to={"/profile"}/>}/>
                            <Route path={"/profile/:userId?"} render={() => <ProfileContainer/>}/>
                            <Route path={"/dialogs"} render={() => <Dialogs/>}/>
                            <Route path={"/music"} render={() => <Music/>}/>
                            <Route path={"/news"} render={() => <News/>}/>
                            <Route path={"/settings"} render={() => <Settings/>}/>
                            <Route path={"/users"} render={() => <UsersContainer/>}/>
                            <Route path={"/login"} render={() => <Login/>}/>
                            <Route path={"*"} render={() => <div>404 NOT FOUND</div>}/>
                        </Switch>
                    </React.Suspense>
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
const AppContainer = compose<ComponentType>(withRouter, connect(mapStateToProps, {
    initializedApp: initializedAppTC,
}))(App)
//чтобы Routes нормально работали, надо обернуть компонент в withRouter
export const MainApp = () => {
    return <HashRouter>
        <Provider store={store}><AppContainer/></Provider>
    </HashRouter>
}

//types
type mapDispatchPropsType = {
    initializedApp: () => void
}
type mapStatePropsType = {
    initialized: boolean
}
type  AppPropsType = mapDispatchPropsType & mapStatePropsType