import axios, {AxiosResponse} from "axios";
import {UserType} from "../redux/users-reducer";
import {UserProfileType} from "../redux/profile-reducer";

const instance = axios.create(
    {
        withCredentials: true,
        baseURL: "https://social-network.samuraijs.com/api/1.0/",
        headers: {"API-KEY": "4fa630d1-6fae-4037-80dd-d195b9c3e03c"},
    }
)

//api
export const usersURL = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<UsersSetResponseType>(`users?page=${currentPage}&count=${pageSize}`)
    },
    follow(userId: number) {
        return instance.post<ResponseType>(`follow/${userId}`)
    },
    unfollow(userId: number) {
        return instance.delete<ResponseType>(`follow/${userId}`)
    },
}
export const profileURL = {
    getProfile(userId: string) {
        return instance.get<UserProfileType>(`profile/${userId}`)
    },
    getStatus(userId: string) {
        return instance.get<string>(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put <{ status: string }, AxiosResponse<ResponseType>>("profile/status", {status})
    },
}
export const authURL = {
    me() {
        return instance.get<ResponseType<AuthenticatedUserData>>("auth/me")
    }
}

//types
export type UsersSetResponseType = {
    items: Array<UserType>
    totalCount: number
    error: null
}
type AuthenticatedUserData = {
    id: number
    email: string
    login: string
}
type ResponseType<T = {}> = {
    resultCode: number
    messages: Array<string>,
    data: T
}
