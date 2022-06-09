import React from "react";

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {
    state = {
        editMode: false
    }

    activatedEditMode() {
        this.setState({
            editMode: true
        })
    }

    deactivatedEditMode() {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (<div>
                {
                    this.state.editMode
                        ? <div>
                            <input autoFocus={true} type="text" value={this.props.status}
                                   onBlur={this.deactivatedEditMode.bind(this)}/>
                        </div>
                        : <div>
                            <span onDoubleClick={this.activatedEditMode.bind(this)}>{this.props.status}</span>
                        </div>
                }
            </div>
        )
    }
}

//types
type ProfileStatusPropsType = {
    status: string
}