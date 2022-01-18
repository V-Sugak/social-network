import axios from "axios";

const instance = axios.create(
    {
        withCredentials: true,
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        headers: {'API-KEY': '4fa630d1-6fae-4037-80dd-d195b9c3e03c'},
    }
)

export const usersURL = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`, {
            withCredentials: true
        }).then(response => response.data)
    }
}

