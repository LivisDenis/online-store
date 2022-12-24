
export interface IUser {
    id: number
    email: string
    password?: string
    role: string
    token?: string | undefined
}

export interface IDevice {
    id: string
    name: string
    price: number
    rating: number
    img: string
    typeId: number
    brandId: number
    info?: IDeviceInfo[]
}

export interface IDeviceInfo {
    id: number
    deviceId: number
    title: string
    description: string
}

export interface ITypeAndBrand {
    id?: string
    name: string
}

export interface IBasket {
    id: number
    userId: number
}

export interface IBasketDevice {
    id: number
    deviceId: number
    basketId: number
}

export interface IRating {
    id: number
    userId: number
    deviceId: number
    rate: number
}
