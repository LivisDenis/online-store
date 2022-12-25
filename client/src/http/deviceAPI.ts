import { IDevice, ITypeAndBrand } from '../store/types';
import axios from './axios';

export const createType = async (type: ITypeAndBrand) => {
  const { data } = await axios.post('api/type', type);
  return data;
};

export const fetchTypes = async () => {
  const { data } = await axios.get('api/type');
  return data;
};

export const createBrand = async (brand: ITypeAndBrand) => {
  const { data } = await axios.post('api/brand', brand);
  return data;
};

export const fetchBrands = async () => {
  const { data } = await axios.get('api/brand');
  return data;
};

export const createDevice = async (device: FormData) => {
  const { data } = await axios.post('api/device', device);
  return data;
};

export const fetchDevices = async (
  typeId: string | undefined | null,
  brandId: string | undefined | null,
  page: number,
  limit = 5
) => {
  const { data } = await axios.get('api/device', {
    params: {
      typeId,
      brandId,
      page,
      limit
    }
  });
  return data;
};

export const fetchOneDevice = async (id: string | undefined): Promise<IDevice> => {
  const { data } = await axios.get<IDevice>(`api/device/${  id}`);
  return data;
};
