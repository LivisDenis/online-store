import CreateType from '../components/modals/CreateType';
import CreateBrand from '../components/modals/CreateBrand';
import CreateDevice from '../components/modals/CreateDevice';
import CreateModal from '../components/CreateModal';
import PopularElectronics from '../components/PopularElectronics';
import React, { useEffect } from 'react';
import { fetchBrands, fetchTypes } from '../http/deviceAPI';
import { useBearStore } from '../store/store';

const btn = [
  { name: 'Добавить тип', Component: CreateType },
  { name: 'Добавить бренд', Component: CreateBrand },
  { name: 'Добавить устройство', Component: CreateDevice }
];

const Create = () => {
  const { setBrands, setTypes } = useBearStore();

  useEffect(() => {
    fetchTypes().then((data) => setTypes(data));
    fetchBrands().then((data) => setBrands(data));
  }, []);

  return (
    <>
      {btn.map(({ name, Component }, i) => (
        <CreateModal key={i} btnName={name}>
          <Component />
        </CreateModal>
      ))}
      <PopularElectronics title='Недавно добавленные' />
    </>
  );
};

export default Create;
