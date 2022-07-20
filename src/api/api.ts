import axios, {AxiosResponse} from "axios";
import {PhotosType, UserType} from "../redux/users-reducer";
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
        return instance.post<ResponseType>(`follow/${userId}`).then(response => response.data)
    },
    unfollow(userId: number) {
        return instance.delete<ResponseType>(`follow/${userId}`).then(response => response.data)
    },
}
export const profileURL = {
    getProfile(userId: number) {
        return instance.get<UserProfileType>(`profile/${userId}`)
    },
    getStatus(userId: number) {
        return instance.get<string>(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put <{ status: string }, AxiosResponse<ResponseType>>("profile/status", {status})
    },
    savePhoto(file: File) {
        const formData = new FormData()      // создаем объект
        formData.append("image", file) //добавляем св-во image
        return instance.put<{ image: File }, AxiosResponse<ResponseType<PhotosType>>>("profile/photo", formData, {
            headers: {
                "Content-type": "multipart/form-data"
            }
        })
    },
    saveProfile(profile: ProfileType) {
        return instance.put<{ profile: ProfileType }, AxiosResponse<ResponseType>>("profile", profile)
    }
}
export const authURL = {
    me() {
        return instance.get<ResponseType<AuthenticatedUserData>>("auth/me")
    },
    login(loginModel: LoginRequestType) {
        return instance.post<LoginRequestType, AxiosResponse<ResponseType<{ userId: number }>>>("auth/login", loginModel)
    },
    logout() {
        return instance.delete<ResponseType>("auth/login")
    },
}
export const securityURL = {
    getCaptchaURL() {
        return instance.get<getCaptchaURLResponseType>("security/get-captcha-url")
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
export type ResponseType<T = {}> = {
    resultCode: number
    messages: Array<string>,
    data: T
}
type LoginRequestType = {
    email: string
    password: string
    rememberMe: boolean
}
export type ProfileType = Omit<UserProfileType, "photos">
type getCaptchaURLResponseType = {
    url: string
}
