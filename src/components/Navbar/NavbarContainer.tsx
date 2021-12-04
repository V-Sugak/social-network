import React from 'react';
import {StoreContext} from '../../StoreContext';
import {Navbar} from "./Navbar";


type NavbarContainerTypeProps = {}

export const NavbarContainer = (props: NavbarContainerTypeProps) => {

    return (<StoreContext.Consumer>
        {(store) => {
            let state = store.getState()
            return <Navbar sidebar={state.sidebar}/>
        }}
    </StoreContext.Consumer>)
}