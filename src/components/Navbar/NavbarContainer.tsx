import React from 'react';

import {Navbar} from "./Navbar";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {initialStateSadBarType} from "../../redux/sidebar-reducer";


type NavbarContainerTypeProps = {}

/*
export const NavbarContainer = (props: NavbarContainerTypeProps) => {

    return (<StoreContext.Consumer>
        {(store) => {
            let state = store.getState()
            return <Navbar sidebar={state.sidebar}/>
        }}
    </StoreContext.Consumer>)
}*/

type mapStateToPropsType = {
    sidebar: initialStateSadBarType
}

type mapDispatchToPropsType = {}

const mapStateToProps = (state: RootStateType): mapStateToPropsType => {
    return {
        sidebar: state.sidebar
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {}
}

export const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export type NavbarTypeProps = mapStateToPropsType & mapDispatchToPropsType;