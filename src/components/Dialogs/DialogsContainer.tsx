import React from 'react';
import {StoreType} from "../../redux/store";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";

type DialogsContainerPropsType = {
    store: StoreType
}

export const DialogsContainer = (props: DialogsContainerPropsType) => {
    let state = props.store.getState().dialogsPage

    const onSendMessageClick = () => {
        props.store.dispatch(addMessageActionCreator())
    }

    const onChangeHandler = (text: string) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text))
    }


    return <Dialogs
        onSendMessageClick={onSendMessageClick}
        onChangeHandler={onChangeHandler}
        state={state}
    />
}