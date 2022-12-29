import React, { useEffect } from 'react';
import TypeBar from '../components/TypeBar';
import BrandBar from '../components/BrandBar';
import DeviceList from '../components/DeviceList';
import { fetchBrands, fetchDevices, fetchTypes } from '../http/deviceAPI';
import Pages from '../components/Pages';
import { useBearStore } from '../store/store';

const Shop = () => {
  const { setBrands, setDevices, page, setTotalCount, selectedBrand, setTypes, selectedType } =
    useBearStore();

  useEffect(() => {
    fetchTypes().then((data) => setTypes(data));
    fetchBrands().then((data) => setBrands(data));
    fetchDevices(null, null, 1, 2).then((data) => {
      setDevices(data.rows);
      setTotalCount(data.count);
    });
  }, []);

  useEffect(() => {
    fetchDevices(selectedType?.id, selectedBrand?.id, page, 2).then((data) => {
      setDevices(data.rows);
      setTotalCount(data.count);
    });
  }, [page, selectedType, selectedBrand]);

  return (
    <div className='mt-5'>
      <div>
        <div>
          <TypeBar />
        </div>
        <div>
          <BrandBar />
          <DeviceList />
          <Pages />
        </div>
      </div>
    </div>
  );
};

export default Shop;
