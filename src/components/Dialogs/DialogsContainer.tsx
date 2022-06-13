import React, {ComponentType} from "react";
import {
    addMessage,
    initialStateDialogsType,
    updateNewMessageText
} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class DialogsContainer extends React.Component<DialogsContainerPropsType> {
    componentDidMount() {
    }

    render() {
        return <Dialogs
            {...this.props}
            state={this.props.state}
            addMessage={this.props.addMessage}
            updateNewMessageText={this.props.updateNewMessageText}
        />
    }
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        state: state.dialogsPage,
    }
}
export default compose<ComponentType>(
    connect(mapStateToProps, {addMessage, updateNewMessageText,}),
    withAuthRedirect
)(DialogsContainer)


//types
type mapStateToPropsType = {
    state: initialStateDialogsType
}
type mapDispatchToPropsType = {
    addMessage: () => void
    updateNewMessageText: (text: string) => void
}
export type DialogsContainerPropsType = mapStateToPropsType & mapDispatchToPropsType
