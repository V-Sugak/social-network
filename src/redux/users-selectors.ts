import {RootStateType} from "./redux-store";

export const getUsers = (state: RootStateType) => {
    return state.usersPage.users
}
export const getPageSize = (state: RootStateType) => {
    return state.usersPage.pageSize
}
export const getTotalCount = (state: RootStateType) => {
    return state.usersPage.totalCount
}
export const getCurrentPage = (state: RootStateType) => {
    return state.usersPage.currentPage
}
export const getIsDisabled = (state: RootStateType) => {
    return state.usersPage.isDisabled
}