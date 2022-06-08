import React from "react";
import {
    addMessage,
    initialStateDialogsType,
    updateNewMessageText
} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";

class DialogsContainer extends React.Component<DialogsContainerPropsType> {
    componentDidMount(){}

    render() {
        if (!this.props.isAuth) {
            return <Redirect to={"/login"}/>
        }
        return <Dialogs
            state={this.props.state}
            addMessage={this.props.addMessage}
            updateNewMessageText={this.props.updateNewMessageText}
        />;
    }
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        state: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {addMessage, updateNewMessageText,})(DialogsContainer);

//types
type mapStateToPropsType = {
    state: initialStateDialogsType
    isAuth:boolean
}
type mapDispatchToPropsType = {
    addMessage: () => void
    updateNewMessageText: (text: string) => void
}
export type DialogsContainerPropsType = mapStateToPropsType & mapDispatchToPropsType
