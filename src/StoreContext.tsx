import React from "react";
import {StoreType} from "./redux/store";


type ProviderPropsType = {
    store: StoreType
    children: React.ReactNode
}

export const StoreContext = React.createContext({} as StoreType)


export const Provider = (props: ProviderPropsType) => {
    return (
        <StoreContext.Provider value={props.store}>{props.children}</StoreContext.Provider>
    )
}
