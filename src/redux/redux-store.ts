import {combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {StoreType} from "./store";

let rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    sidebar: sidebarReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export let store = createStore(rootReducer) as StoreType