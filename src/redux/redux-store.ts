import {applyMiddleware, combineReducers, createStore} from "redux";
import {DialogsActionsType, dialogsReducer} from "./dialogs-reducer";
import {ProfileActionsType, profileReducer} from "./profile-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {UsersActionsType, usersReducer} from "./users-reducer";
import {AuthActionsType, authReducer} from "./auth-reducer";
import {AppActionsType, appReducer} from "./app-reducer";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";

let rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
})

export let store = createStore(rootReducer, applyMiddleware(thunk))

// @ts-ignore
/*const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))*/

//types
export type RootStateType = ReturnType<typeof rootReducer>
export type RootActionsType =
    | UsersActionsType
    | AppActionsType
    | AuthActionsType
    | ProfileActionsType
    | DialogsActionsType
export type ThunkType<ReturnType = void> = ThunkAction<ReturnType, RootStateType, unknown, RootActionsType>

