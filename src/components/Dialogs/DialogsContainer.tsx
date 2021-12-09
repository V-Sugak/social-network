import React from 'react';
import {
    addMessageActionCreator,
    initialStateDialogsType,
    updateNewMessageTextActionCreator
} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";

/*
export const DialogsContainer = (props: DialogsContainerPropsType) => {
    return (
        <StoreContext.Consumer>
            {(store: StoreType) => {
                let state = store.getState().dialogsPage
                const onSendMessageClick = () => {
                    store.dispatch(addMessageActionCreator())
                }

                const onChangeHandler = (text: string) => {
                    store.dispatch(updateNewMessageTextActionCreator(text))
                }

                return <Dialogs
                    onSendMessageClick={onSendMessageClick}
                    onChangeHandler={onChangeHandler}
                    state={state}/>
            }}
        </StoreContext.Consumer>
    )
}*/

type mapStateToPropsType = {
    state: initialStateDialogsType
}

type mapDispatchToPropsType = {
    onSendMessageClick: () => void,
    onChangeHandler: (text: string) => void,
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        state: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        onSendMessageClick: () => {
            dispatch(addMessageActionCreator())
        },
        onChangeHandler: (text: string) => {
            dispatch(updateNewMessageTextActionCreator(text))
        },
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType
