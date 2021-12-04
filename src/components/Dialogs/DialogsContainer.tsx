import React from 'react';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {StoreContext} from '../../StoreContext';
import {StoreType} from "../../redux/store";


type DialogsContainerPropsType = {}

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
}