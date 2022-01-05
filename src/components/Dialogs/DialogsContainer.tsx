import React from 'react';
import {
    addMessage,
    initialStateDialogsType,
    updateNewMessageText
} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";


type mapStateToPropsType = {
    state: initialStateDialogsType
}

type mapDispatchToPropsType = {
    addMessage: () => void,
    updateNewMessageText: (text: string) => void,
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        state: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addMessage: () => {
            dispatch(addMessage())
        },
        updateNewMessageText: (text: string) => {
            dispatch(updateNewMessageText(text))
        },
    }
}

export const DialogsContainer = connect(mapStateToProps, {addMessage, updateNewMessageText,})(Dialogs);

export type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType
