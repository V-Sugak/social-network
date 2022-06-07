import {applyMiddleware, combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {UsersActionsType, usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import {AppActionsType, appReducer} from "./app-reducer";
import thunk, {ThunkAction} from "redux-thunk";

let rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
})

export let store = createStore(rootReducer, applyMiddleware(thunk))

//types
export type AppStateType = ReturnType<typeof rootReducer>
export type AppRootActionsType = UsersActionsType | AppActionsType
export type ThunkType<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AppRootActionsType>

// @ts-ignore
window.store = store