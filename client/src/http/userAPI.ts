import {$authHost, $host} from "./index.js";
import jwtDecode from "jwt-decode";
import {IUser} from "../store/types";
import {AxiosResponse} from "axios";

export const registration = async (email: string, password: string): Promise<IUser> => {
    const {data} = await $host.post<IUser>('api/user/registration', {email, password, role: 'ADMIN'})
    localStorage.setItem('token', data.token!)
    return jwtDecode(data.token!)
}

export const login = async (email: string, password: string): Promise<IUser> => {
    const {data} = await $host.post<IUser>('api/user/login', {email, password})
    localStorage.setItem('token', data.token!)
    return jwtDecode(data.token!)
}

export const check = async (): Promise<IUser> => {
    const {data} = await $authHost.get<IUser>('api/user/auth')
    localStorage.setItem('token', data.token!)
    return jwtDecode(data.token!)
}