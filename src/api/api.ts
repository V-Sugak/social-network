import axios from "axios";
import {UserType} from "../redux/users-reducer";

const instance = axios.create(
    {
        withCredentials: true,
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        headers: {'API-KEY': '4fa630d1-6fae-4037-80dd-d195b9c3e03c'},
    }
)

export const usersURL = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<UsersSetResponseType>(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
}

//types
export type UsersSetResponseType = {
    items: Array<UserType>
    totalCount: number
    error: null
}