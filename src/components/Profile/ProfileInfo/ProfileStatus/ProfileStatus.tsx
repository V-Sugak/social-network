import React, {ChangeEvent} from "react";

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {
    state: StateType = {
        editMode: false,
        status: this.props.status
    }
    activatedEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivatedEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateUserStatus(this.state.status)
    }
    onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<StateType>) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (<div>
                {
                    this.state.editMode
                        ? <div>
                            <input autoFocus={true} type="text" value={this.state.status}
                                   onBlur={this.deactivatedEditMode} onChange={this.onChangeHandler}/>
                        </div>
                        : <div>
                            <span onDoubleClick={this.activatedEditMode}>{this.props.status || "No status"}</span>
                        </div>
                }
            </div>
        )
    }
}

//types
type ProfileStatusPropsType = {
    status: string
    updateUserStatus: (status: string) => void
}
type StateType = {
    editMode: boolean
    status: string
}