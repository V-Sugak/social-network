import React, {ChangeEvent, useEffect, useState} from "react";

export const ProfileStatusWithHooks = (props: ProfileStatusPropsType) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [status, setStatus] = useState<string>(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setStatus(e.currentTarget.value)
    const deactivatedEditMode = () => {
        props.updateUserStatus(status)
        setEditMode(false)
    }
    const activatedEditMode = () => setEditMode(true)

    return <div>
        {editMode ?
            <div>
                <input autoFocus={true} type="text"
                       value={status}
                       onChange={onChangeHandler}
                       onBlur={deactivatedEditMode}
                />
            </div>
            : <div>
                <span onDoubleClick={activatedEditMode}>{props.status || "No status"}</span>
            </div>
        }
    </div>
}

//types
type ProfileStatusPropsType = {
    status: string
    updateUserStatus: (status: string) => void
}
