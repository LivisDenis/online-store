import create from 'zustand';
import { devtools } from 'zustand/middleware';
import { IDevice, ITypeAndBrand, IUser } from './types';

interface StoreState {
  page: number;
  limit: number;
  user: IUser | null;
  isAuth: boolean;
  devices: IDevice[];
  totalCount: number;
  basketDevices: IDevice[];
  types: ITypeAndBrand[];
  selectedType: ITypeAndBrand | null;
  setTypes: (types: ITypeAndBrand[]) => void;
  setSelectedType: (type: ITypeAndBrand) => void;
  brands: ITypeAndBrand[];
  selectedBrand: ITypeAndBrand | null;
  setBrands: (types: ITypeAndBrand[]) => void;
  setSelectedBrand: (type: ITypeAndBrand) => void;
  setUser: (user: IUser | null) => void;
  setIsAuth: (bool: boolean) => void;
  setDevices: (devices: IDevice[]) => void;
  setTotalCount: (count: number) => void;
  setBasketDevices: (device: IDevice) => void;
  setPage: (page: number) => void;
}

export const useBearStore = create<StoreState>()(
  devtools(
    (set) => ({
      page: 1,
      limit: 3,
      types: [],
      brands: [],
      selectedBrand: null,
      selectedType: null,
      user: null,
      isAuth: false,
      devices: [],
      totalCount: 0,
      basketDevices: [],
      setTypes: (types) => set(() => ({ types })),
      setSelectedType: (type) =>
        set(() => ({
          page: 1,
          selectedType: type
        })),
      setPage: (page) => set(() => ({ page })),
      setBrands: (brands) => set(() => ({ brands })),
      setSelectedBrand: (brand) =>
        set(() => ({
          selectedBrand: brand
        })),
      setUser: (user) => set(() => ({ user })),
      setIsAuth: (bool) => set(() => ({ isAuth: bool })),
      setDevices: (devices) => set(() => ({ devices })),
      setTotalCount: (count) => set(() => ({ totalCount: count })),
      setBasketDevices: (device) =>
        set((state) => ({ basketDevices: [...state.basketDevices, device] }))
    }),
    {
      name: 'bear-storage'
    }
  )
);
