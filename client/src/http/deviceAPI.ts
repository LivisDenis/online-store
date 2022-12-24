import {$authHost, $host} from "./index";
import {ITypeAndBrand} from "../store/types";

export const createType = async (type: ITypeAndBrand) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
}

export const createBrand = async (brand: ITypeAndBrand) => {
    const {data} = await $authHost.post('api/brand', brand)
    return data
}

export const fetchBrands = async () => {
    const {data} = await $host.get('api/brand')
    return data
}

export const createDevice = async (device) => {
    const {data} = await $authHost.post('api/device', device)
    return data
}

export const fetchDevices = async (typeId: string | undefined | null, brandId: string | undefined | null, page: number, limit = 5) => {
    const {data} = await $host.get('api/device', {params: {
            typeId, brandId, page, limit
        }})
    return data
}

export const fetchOneDevice = async (id: string | undefined) => {
    const {data} = await $host.get('api/device/' + id)
    return data
}

