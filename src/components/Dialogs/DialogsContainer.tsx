import React, {ComponentType} from "react";
import {addMessageAC, StateDialogsType} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class DialogsContainer extends React.Component<DialogsContainerPropsType> {
    render() {
        return <Dialogs
            {...this.props}
            state={this.props.state}
            addMessage={this.props.addMessage}
        />
    }
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        state: state.dialogsPage,
    }
}

export default compose<ComponentType>(
    connect(mapStateToProps, {addMessage: addMessageAC,}),
    withAuthRedirect
)(DialogsContainer)


//types
type mapStateToPropsType = {
    state: StateDialogsType
}
type mapDispatchToPropsType = {
    addMessage: (value: string) => void
}
export type DialogsContainerPropsType = mapStateToPropsType & mapDispatchToPropsType
